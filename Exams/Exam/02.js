function solveClasses() {
    class Pet {
        constructor(owner, name) {
            this.owner = owner;
            this.name = name;
            this.comments = [];
        }
        addComment(comment) {

            if (this.comments.includes(comment) === false) {
                this.comments.push(comment);
                return `Comment is added.`
            } else {
                throw new Error(`This comment is already added!`);
            }
        }
        feed() {
            return `${this.name} is fed`
        }
        toString() {
            const result = [
                `Here is ${this.owner}'s pet ${this.name}.`,
            ]
            if (this.comments.length >= 1) {
                result.push("Special requirements: ");
                this.comments.forEach(c => result.push(`${c}, `));
                return result.join('')
            } else {

                return result.join("");
            }
        }


    }

    class Cat extends Pet {
        constructor(owner, name, insideHabits, scratching) {
            super(owner, name);
            this.insideHabits = insideHabits;
            this.scratching = scratching;

        }
        feed() {
            const feed = [
                super.feed(),
                `, happy and purring.`
            ];
            return feed.join("");
        }
        toString() {
            const result = [
                super.toString(),
                `Main information:${this.name} is a cat with ${this.insideHabits}`
            ]
            if (this.scratching) {
                result.push(", but beware of scratches.");
                return result.join("\n");
            } else {
                return result.join('\n');
            };

        }
    }

    class Dog extends Pet {
        constructor(owner, name, runningNeeds, trainability) {
            super(owner, name);
            this.runningNeeds = runningNeeds;
            this.trainability = trainability;
        }
        feed() {
            const feed = [
                super.feed(),
                `, happy and wagging tail.`
            ];
            return feed.join('\n');
        }
        toString() {
            const result=[
                super.toString(),
                `Main information:
                ${this.name} is a dog with need of ${runningNeeds}km running every day and ${trainability} trainability.`
                

            ]
        }

    }
    return {
        Pet,
        Cat,
        Dog
    }
}