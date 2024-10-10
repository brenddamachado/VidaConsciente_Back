export default class Local {
    constructor(id, name, address, hours, serviceType) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.hours = hours;
        this.serviceType = serviceType;
    }
}

let locations = [
    new Local(1, 'Clínica de Testes São Paulo', 'Rua da Saúde, 123, SP', '08:00 - 18:00', 'Testagem de DSTs'),
    new Local(2, 'Laboratório Rio Saúde', 'Av. Copacabana, 456, RJ', '09:00 - 17:00', 'Tratamento de DSTs'),
    new Local(3, 'Centro de Saúde Belo Horizonte', 'Praça da Liberdade, 789, BH', '07:00 - 19:00', 'Testagem de DSTs'),
    new Local(4, 'Posto de Saúde Brasília', 'SQS 108, Bloco D, Brasília', '08:00 - 16:00', 'Tratamento de DSTs'),
    new Local(5, 'Laboratório Salvador', 'Rua da Piedade, 321, BA', '08:00 - 20:00', 'Testagem de DSTs'),
    new Local(6, 'Clínica de Testes Curitiba', 'Rua XV de Novembro, 654, PR', '08:00 - 18:00', 'Tratamento de DSTs'),
    new Local(7, 'Centro de Saúde Porto Alegre', 'Av. Ipiranga, 987, RS', '09:00 - 19:00', 'Testagem de DSTs'),
    new Local(8, 'Posto de Saúde Recife', 'Rua do Apolo, 111, PE', '08:00 - 17:00', 'Tratamento de DSTs'),
    new Local(9, 'Clínica de Testes Fortaleza', 'Av. Dom Luis, 222, CE', '08:00 - 18:00', 'Testagem de DSTs'),
    new Local(10, 'Laboratório Manaus', 'Av. Eduardo Ribeiro, 333, AM', '09:00 - 16:00', 'Tratamento de DSTs')
];

export let idCounter = locations.length + 1;

export const getLocations = () => locations;

export const addLocation = (location) => {
    location.id = idCounter++;
    locations.push(new Local(location.id, location.name, location.address, location.hours, location.serviceType));
    return location;
};

export const updateLocation = (id, updatedLocation) => {
    const index = locations.findIndex((location) => location.id === id);
    if (index !== -1) {
        locations[index] = { ...locations[index], ...updatedLocation };
        return locations[index];
    }
    return null;
};

export const deleteLocation = (id) => {
    const index = locations.findIndex((location) => location.id === id);
    if (index !== -1) {
        return locations.splice(index, 1);
    }
    return null;
};
