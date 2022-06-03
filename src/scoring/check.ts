import { Root } from "../main/root";
import { parseRoot } from "../main/root/parseUtils";

export function checkRoot(key: Root[], ans: string) {
    const answers = ans
        .replace(/,/g, " ")
        .split(" ")
        .filter((x) => x.length > 0);

    if (answers.length != key.length) return false;

    const answersRoot = answers.map((x) => parseRoot(x));

    key.sort();
    answersRoot.sort();

    for (let index = 0; index < key.length; index++) {
        if (JSON.stringify(key[index]) != JSON.stringify(answersRoot[index]))
            return false;
    }

    return true;
}
