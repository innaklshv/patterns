interface NationalCostume {
    getName(): string;
}

class UkrainianNationalCostume implements NationalCostume {
    getName() {
        return 'Traditional costume is vyshyvanka';
    }
}

class SurinameNationalCostume implements NationalCostume {
    getName() {
        return 'Traditional costume is koto';
    }
}


interface NationalFlag {
    getColours(): string[];
}


class UkrainianNationalFlag implements NationalFlag {
    getColours() {
        return ['yellow', 'blue'];
    }
}

class SurinameNationalFlag implements NationalFlag {
    getColours() {
        return ['green', 'yellow', 'red'];
    }
}

interface AbstractFactory {
    createCostume(): NationalCostume;
    createFlag(): NationalFlag;
}

class UkrainianSouvenirsFactory implements AbstractFactory {
    createCostume() {
        return new UkrainianNationalCostume();
    }
    createFlag() {
        return new UkrainianNationalFlag();
    }
}

class SurinameSouvenirsFactory implements AbstractFactory {
    createCostume() {
        return new SurinameNationalCostume();
    }
    createFlag() {
        return new SurinameNationalFlag();
    }
}


function makeSouvenirs(countryName: string): void {
    let factory: AbstractFactory;
    if (countryName == 'Ukraine') {
        factory = new UkrainianSouvenirsFactory();
    } else if (countryName == 'Suriname') {
        factory = new SurinameSouvenirsFactory();
    } else {
        return console.log('There is no such county in the list yet')
    }

    const costume: NationalCostume = factory.createCostume();
    const flag: NationalFlag = factory.createFlag();

    console.log(costume.getName());
    console.log(flag.getColours());
}

makeSouvenirs("Ukraine");
makeSouvenirs("Suriname");
makeSouvenirs("UK");
