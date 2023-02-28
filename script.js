async function dictionary(e) {
    try {
        let input_data = document.querySelector('input');
        let word = input_data.value;

        let a = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`) //promise
        out1 = await a //response
        data = await out1.json(); //promise //object

        let view = document.querySelector('#exampleModal .modal-body')// modal body to display details of searched text

        let synonym = data[0].meanings[0].synonyms;
        let definition = data[0].meanings[0].definitions;

        let head = document.querySelector('.modal-title');
        head.innerText = "GOT THE WORD!!!!"

        view.innerHTML = `<span>Searched text : </span><p>${data[0].word}</p>
   <span>Phonetic : </span><p>${data[0].phonetics[1].text}</p>
   <span>Synonyms :</span>`

        // for loop to iterate the different aspects of word

        for (let i of synonym) {
            let synonyms = document.createElement('li'); // tag created for displaying name of the holiday
            synonyms.innerHTML = `${i} <br>`;
            view.append(synonyms);
        }
        let name = document.createElement('span');
        name.innerText = "Definition :";
        view.append(name)
        for (let i of definition) {
            let definition = document.createElement('li');
            definition.innerHTML = `${i.definition}`;
            view.append(definition)
        }

       
    } catch {
        let view = document.querySelector('#exampleModal .modal-body');
        view.innerText = "Word Not Found";
        let head = document.querySelector('.modal-title');
        head.innerText = "OOPS!"
    }
}