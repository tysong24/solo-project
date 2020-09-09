CREATE DATABASE spendTracker;

CREATE TABLE IF NOT EXISTS spend (
    spend_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    amount INTEGER,
    type TEXT
);