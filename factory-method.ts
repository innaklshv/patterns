interface ClothesCreator {
    FactoryMethod(): Clothes;
}

class DressCreator implements ClothesCreator {
    FactoryMethod() {
        return new Dress();
    }
}

class SkirtCreator implements ClothesCreator {
    FactoryMethod() {
        return new Skirt();
    }
}

interface Clothes {
    GetName(): string;
}

class Dress implements Clothes {
    GetName(){
        return 'Dress';
    }
}

class Skirt implements Clothes {
    GetName(){
        return 'Skirt';
    }
}

const creators: ClothesCreator[] = [new DressCreator(), new SkirtCreator()];
const clothes: Clothes[] = creators.map(creator => creator.FactoryMethod());
clothes.forEach(item =>console.log(item.GetName()));
console.log(clothes);