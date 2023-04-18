<template>
    <div>
        <div class="text-center" v-if="!ctrls.started">
            <h1 class="text-4xl font-bold mb-24">Who Wants to be a Millionaire?</h1>
            <button @click="start" class="text-4xl">start</button>
        </div>
        <div v-else>
            <div>
                <div id="q">
                    <h2>{{ game.qs[game.current]?.title }}</h2>
                    <div id="choices">
                        <button :disabled="ctrls.process" @click.prevent="choice('a')"
                            :class="`${game.qs[game.current].answer === 'a' && (ctrls.correct || ctrls.wrong) ? 'correct' : (game.answer === 'a' && ctrls.wrong) ? 'wrong' : ''}`"
                        >A) {{ game.qs[game.current]?.choices?.a }}</button>
                        <button :disabled="ctrls.process" @click.prevent="choice('b')"
                            :class="`${game.qs[game.current].answer === 'b' && (ctrls.correct || ctrls.wrong) ? 'correct' : (game.answer === 'b' && ctrls.wrong) ? 'wrong' : ''}`"
                        >B) {{ game.qs[game.current]?.choices?.b }}</button>
                        <button :disabled="ctrls.process" @click.prevent="choice('c')"
                            :class="`${game.qs[game.current].answer === 'c' && (ctrls.correct || ctrls.wrong) ? 'correct' : (game.answer === 'c' && ctrls.wrong) ? 'wrong' : ''}`"
                        >C) {{ game.qs[game.current]?.choices?.c }}</button>
                        <button :disabled="ctrls.process" @click.prevent="choice('d')"
                            :class="`${game.qs[game.current].answer === 'd' && (ctrls.correct || ctrls.wrong) ? 'correct' : (game.answer === 'd' && ctrls.wrong) ? 'wrong' : ''}`"
                        >D) {{ game.qs[game.current]?.choices?.d }}</button>
                    </div>    
                    <div id="final" v-if="ctrls.final">
                        <h2>Is it your final answer?</h2>
                        <div>
                            <button :disabled="ctrls.process" @click="final(1)">Yes</button>
                            <button :disabled="ctrls.process" @click="final(0)">No</button>
                        </div>
                    </div>
                </div>
                <div id="scores">
                    <ul>
                        <li v-for="(score, i) in game.scores" :key="score">
                            <div :class="`${game.current === i ? 'current' : ''}`">{{ score }}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ctrls: { started: false, final: false, correct: false, wrong: false, process: true },
            game: { qs: [], scores: [], /*lifelines: [],*/ sounds: [], current: 0, answer: "" }
        };
    },
    methods: {
        delay(sec) {
            return new Promise(resolve => setTimeout(resolve, sec));
        },
        async start() {
            this.ctrls.started = true;
            this.getSounds();
            this.game.sounds.play.play();
            const n = 7;
            this.game.qs = this.getQ(n);
            this.game.scores = this.createScores(n);
            await this.delay(4000);
            this.ctrls.process = false;
            this.game.sounds.bg.play();
            console.log(this.game);
        },
        getQ(n) {
            let qs = []; // qs: questions
            for (let i = 1; i <= n; ++i) {
                const q = {
                    title: `title ${i}`,
                    choices: {
                        a: `a ${i}`,
                        b: `b ${i}`,
                        c: `c ${i}`,
                        d: `d ${i}`,
                    },
                    answer: "a"
                };
                qs.push(q);
            }
            return qs;
        },
        createScores(n) {
            let scores = [];
            for (let i = 1; i <= n; ++i) {
                scores.push((i * i * 5 * 10000));
            }
            return scores;
        },
        getSounds() {
            this.game.sounds.play = new Audio("");
            this.game.sounds.bg = new Audio("");
            this.game.sounds.final = new Audio("");
            this.game.sounds.correct = new Audio("");
            this.game.sounds.wrong = new Audio("");
        },
        choice(c) {
            this.stopSounds();
            this.game.sounds.final.play();
            this.game.answer = c;
            this.ctrls.final = true;
        },
        async final(f) {
            this.ctrls.process = true;
            this.stopSounds();
            this.ctrls.final = false;
            if (f) {
                if (this.game.answer === this.game.qs[this.game.current].answer) {
                    this.ctrls.correct = true;
                    this.game.sounds.correct.play();
                    await this.delay(4000);
                    this.nextQ();
                }
                else {
                    this.ctrls.wrong = true;
                    this.game.sounds.wrong.play();
                }
            }
            else {
                this.game.sounds.bg.play();
                this.ctrls.process = false;
            }
        },
        async nextQ() {
            if (this.game.current + 1 < this.game.qs.length) {
                this.ctrls.process = true;
                this.ctrls.correct = false;
                this.stopSounds();
                this.game.sounds.play.play();
                ++this.game.current;
                await this.delay(4000);
                this.ctrls.process = false;
                this.game.sounds.bg.play();
            }
            else {
                console.log("finished");
            }
        },
        stopSounds() {
            const sounds = Object.entries(this.game.sounds);
            for (let i = 0; i < sounds.length; ++i) {
                sounds[i][1].pause();
                sounds[i][1].currentTime = 0;
            }
        }
    },
}
</script>