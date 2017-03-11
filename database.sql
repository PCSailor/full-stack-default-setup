-- create db table
CREATE TABLE app (
  id SERIAL PRIMARY KEY,
  name VARCHAR(240),
  status BOOLEAN DEFAULT false
);
-- test dummy data
INSERT INTO app (name) VALUES ('Cell01');
INSERT INTO app (name) VALUES ('Cell02');
INSERT INTO app (name) VALUES ('Cell03');
INSERT INTO app (name) VALUES ('Cell04');
INSERT INTO app (name) VALUES ('Cell05');
INSERT INTO app (name) VALUES ('Cell06');
INSERT INTO app (name) VALUES ('Cell07');
INSERT INTO app (name) VALUES ('Cell08');
INSERT INTO app (name) VALUES ('Cell09');
INSERT INTO app (name) VALUES ('Cell10');
