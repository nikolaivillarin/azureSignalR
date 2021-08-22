module.exports = async function (context, documents) {
  if (!!documents && documents.length > 0) {
    const updates = documents.map(stock => ({
      target: 'updated',
      arguments: [stock]
    }));

    context.bindings.signalMessages = updates;
    context.done();
  }
}
