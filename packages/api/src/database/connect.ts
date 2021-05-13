import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGO_URI || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => {
    console.info(error); // eslint-disable-line
  });
