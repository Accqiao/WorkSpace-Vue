export  interface RootStateTypes {
    num: number;
}
export interface AllStateTypes extends RootStateTypes {
    byValue: ByValueStateTypes;
}

export  interface ByValueStateTypes {
    count: number;
}
