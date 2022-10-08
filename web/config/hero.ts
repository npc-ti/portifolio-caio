export interface heroConfigProps {
    wordList: string[],
    typeWriterLoop: boolean,
    typeWriterDelay: number,
}

const heroConfig: heroConfigProps = {
    wordList: ["Olá, eu sou o Caio", "dev-fullstack.tsx", "<Codigo por amor/>"],
    typeWriterLoop: true,
    typeWriterDelay: 2000,

}

export default heroConfig;