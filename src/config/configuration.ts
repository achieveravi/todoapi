export default () => ({
  port: parseInt(process.env.PORT, 10) || 6000,
  database: {
    url: `mongodb+srv://achieveravi-project1:${process.env.DB_PWD}@cluster0.7kvjjrm.mongodb.net/todos?retryWrites=true&w=majority`,
  },
});
