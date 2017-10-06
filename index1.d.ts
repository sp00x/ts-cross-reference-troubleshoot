export declare abstract class Animal {
    abstract talk(): void;
    static create(type: string): Animal;
}
export declare class Cat extends Animal {
    talk(): void;
}
