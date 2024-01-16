DROP TABLE IF EXISTS year_2015;
DROP TABLE IF EXISTS year_2016;
DROP TABLE IF EXISTS year_2017;
DROP TABLE IF EXISTS year_2018;
DROP TABLE IF EXISTS year_2019;
DROP TABLE IF EXISTS happiness_merged;

CREATE TABLE year_2015 (
  Country VARCHAR(45) NOT NULL,
  Region VARCHAR(45) NOT NULL,
  Happiness_Rank INTEGER NOT NULL,
  Happiness_Score DECIMAL NOT NULL,
	Standard_Error DECIMAL NOT NULL,
	GDP_per_capita DECIMAL NOT NULL,
	Family DECIMAL NOT NULL,
	Life_Expectancy DECIMAL NOT NULL,
	Freedom DECIMAL NOT NULL,
	Trust_Gov_Corruption DECIMAL NOT NULL,
	Generosity DECIMAL NOT NULL,
	Dystopia_Residual DECIMAL NOT NULL	
);

CREATE TABLE year_2016 (
  Country VARCHAR(45) NOT NULL,
  Region VARCHAR(45) NOT NULL,
  Happiness_Rank INTEGER NOT NULL,
  Happiness_Score DECIMAL NOT NULL,
	Lower_Confidence_Interval DECIMAL NOT NULL,
	Upper_Confidence_Interval DECIMAL NOT NULL,
	GDP_per_capita DECIMAL NOT NULL,
	Family DECIMAL NOT NULL,
	Life_Expectancy DECIMAL NOT NULL,
	Freedom DECIMAL NOT NULL,
	Trust_Gov_Corruption DECIMAL NOT NULL,
	Generosity DECIMAL NOT NULL,
	Dystopia_Residual DECIMAL NOT NULL	
);

CREATE TABLE year_2017 (
  Country VARCHAR(45) NOT NULL,
  Happiness_Rank INTEGER NOT NULL,
  Happiness_Score DECIMAL NOT NULL,
	Upper_Confidence_Interval DECIMAL NOT NULL,
	Lower_Confidence_Interval DECIMAL NOT NULL,
	GDP_per_capita DECIMAL NOT NULL,
	Family DECIMAL NOT NULL,
	Life_Expectancy DECIMAL NOT NULL,
	Freedom DECIMAL NOT NULL,
	Generosity DECIMAL NOT NULL,
	Trust_Gov_Corruption DECIMAL NOT NULL,
	Dystopia_Residual DECIMAL NOT NULL	
);

CREATE TABLE year_2018 (
  Overall_rank INTEGER NOT NULL,
	Country_Region VARCHAR(45) NOT NULL,
  Happiness_Score DECIMAL NOT NULL,
	GDP_per_capita DECIMAL NOT NULL,
	Social_support DECIMAL NOT NULL,
	Life_Expectancy DECIMAL NOT NULL,
	Freedom DECIMAL NOT NULL,
	Generosity DECIMAL NOT NULL,
	Trust_Gov_Corruption DECIMAL NOT NULL	
);

CREATE TABLE year_2019 (
  Overall_rank INTEGER NOT NULL,
	Country_Region VARCHAR(45) NOT NULL,
  Happiness_Score DECIMAL NOT NULL,
	GDP_per_capita DECIMAL NOT NULL,
	Social_support DECIMAL NOT NULL,
	Life_Expectancy DECIMAL NOT NULL,
	Freedom DECIMAL NOT NULL,
	Generosity DECIMAL NOT NULL,
	Trust_Gov_Corruption DECIMAL NOT NULL	
);


CREATE TABLE happiness_merged (
	Country VARCHAR(45) NOT NULL,
	Region VARCHAR(45) NULL,
	Happiness_Rank INTEGER NOT NULL,
	Happiness_Score DECIMAL NOT NULL,
	Standard_Error DECIMAL NULL,
	Lower_Confidence_Interval DECIMAL NULL,
	Upper_Confidence_Interval DECIMAL NULL,
	GDP_per_capita DECIMAL NOT NULL,
	Family DECIMAL NULL,
	Social_Support DECIMAL NULL,
	Life_Expectancy DECIMAL NOT NULL,
	Freedom DECIMAL NOT NULL,
	Trust_Gov_Corruption DECIMAL NOT NULL,
	Generosity DECIMAL NOT NULL,
	Dystopia_Residual DECIMAL NULL,
	Year INTEGER NOT NULL
	
);





ALTER TABLE year_2015
ADD year INTEGER
DEFAULT 2015;

SELECT * FROM year_2015;

ALTER TABLE year_2016
ADD year INTEGER
DEFAULT 2016;

SELECT * FROM year_2016;

ALTER TABLE year_2017
ADD year INTEGER
DEFAULT 2017;

SELECT * FROM year_2017;

ALTER TABLE year_2018
ADD year INTEGER
DEFAULT 2018;

SELECT * FROM year_2018;

ALTER TABLE year_2019
ADD year INTEGER
DEFAULT 2019;





