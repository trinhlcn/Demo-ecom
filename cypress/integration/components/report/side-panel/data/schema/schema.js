// Constants
const ELEMENTS = {
    SCHEMA_SECTION: '.schemas.section'
};

class Schema {
    constructor() {}

    getSchemaSection() {
        return cy.get(ELEMENTS.SCHEMA_SECTION);
    }

    getField(field) {
        return this.getSchemaSection().contains(new RegExp(`^${field}$`, 'g')).parent().parent();
    }
}

export default Schema;
