import mongoose from 'mongoose';
import app from './app';
async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);

    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
