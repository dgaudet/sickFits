const Query = {
  dogs(parent, args, ctx, info) {
    return [{name: 'ruffy'},{name: 'barky'}, {name: 'biter'}];
  }
};

module.exports = Query;
