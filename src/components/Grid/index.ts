import GridRoot from './Grid';
import GridItem from './GridItem';

const Grid = {};

Object.defineProperty(Grid, 'Root', {
    writable: false,
    value: GridRoot
});

Object.defineProperty(Grid, 'Item', {
    writable: false,
    value: GridItem
})

export default Grid;

export * from './Grid.types';