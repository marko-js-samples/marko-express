module.exports = function render(input, context) {
    context.write('Hello ' + input.name + '!');
};