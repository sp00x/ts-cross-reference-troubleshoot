export declare abstract class Animal {
    abstract talk(): void;
    static create1(type: string): Animal;
    static types: {
        [type: string]: new () => Animal;
    };
    static create2(type: string): Animal;
}
