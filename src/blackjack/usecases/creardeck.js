import _ from 'underscore';

// Esta función crea un nuevo deck
/**
 * 
 * @param {Array<String>} tiposDeCarta Ej: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ej: ['A','J','Q','K']
 * @returns {Array<String>} retona un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    let deck = [];

    if (!tiposDeCarta || tiposDeCarta.length === 0 ) 
        throw new Error('tiposDeCarta es obligatorio como un arreglo de String');

    if (!tiposEspeciales || tiposEspeciales.length === 0 ) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de String');      

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    
    return deck;
}
