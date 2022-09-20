export default function App() {

    return (
        <>
            <div class="gameScreen">
                <img class="imgGallow" src="assets/forca0.png" />
                <div class="secret-word">
                    <div class="word"></div>
                    <div class="word"></div>
                    <div class="word"></div>
                    <div class="word"></div>
                    <div class="word"></div>
                    <div class="word"></div>
                    <div class="word"></div>
                    <div class="word"></div>
                    <div class="word"></div>
                    <div class="word"></div>
                </div>
                <button class="game-word">Escolher Palavra</button>
            </div>
            <div class="words">
                <button class="abc">A</button>
                <button class="abc">b</button>
                <button class="abc">c</button>
                <button class="abc">d</button>
                <button class="abc">e</button>
                <button class="abc">f</button>
                <button class="abc">g</button>
                <button class="abc">h</button>
                <button class="abc">i</button>
                <button class="abc">j</button>
                <button class="abc">k</button>
                <button class="abc">l</button>
                <button class="abc">m</button>
            </div>
            <div class="words">
                <button class="abc">n</button>
                <button class="abc">o</button>
                <button class="abc">p</button>
                <button class="abc">q</button>
                <button class="abc">r</button>
                <button class="abc">s</button>
                <button class="abc">t</button>
                <button class="abc">u</button>
                <button class="abc">v</button>
                <button class="abc">w</button>
                <button class="abc">x</button>
                <button class="abc">y</button>
                <button class="abc">z</button>
            </div>
            <div class="answer">
                <h1>Já sei a palavra !</h1> <input class="input-kick" /> <input type="submit" value="Chutar"  class="submit"/>
                   
            </div>
        </>

    )
}