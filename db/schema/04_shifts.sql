DROP TABLE IF EXISTS shifts CASCADE;

CREATE TABLE shifts (
  id SERIAL PRIMARY KEY NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  date TIMESTAMP WITH TIME ZONE 
);