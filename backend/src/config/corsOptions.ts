import cors from 'cors';

const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',  // Ange frontendens URL
  optionsSuccessStatus: 200
};

export default corsOptions;