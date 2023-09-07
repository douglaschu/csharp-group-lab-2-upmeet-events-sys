--USE EventsDB;
CREATE TABLE Favorite (   FavoriteId INT PRIMARY KEY IDENTITY(1,1),    userName NVARCHAR(255),   eventId INT,     FOREIGN KEY (eventId) REFERENCES Event(id));--INSERT INTO Favorite (userName, eventId)--VALUES('Maria', 1),--('Doug', 2);

--SELECT * FROM Favorite;
--ALTER TABLE Event
--DROP COLUMN eventTime;
--UPDATE Event
--SET eventTime = "1200";


--CREATE TABLE Event (--   id INT PRIMARY KEY IDENTITY(1,1), --   eventName NVARCHAR(255),--   eventDate DATE,--   eventTime DATE,--   eventLocation NVARCHAR(255),--   price FLOAT,--   eventDescription NVARCHAR(4000),--   eventImage NVARCHAR(4000),--   eventCategory NVARCHAR(255),--   eventVenue NVARCHAR(255)--   );--DROP TABLE Favorite;--INSERT INTO Event(eventName, eventDate, eventTime, eventLocation, price, eventDescription, eventImage, eventCategory, eventVenue)
--VALUES 
--('Hockey Game', '2023-09-15', '2023-10-15', 'Detroit', 85, 'Red Wings', 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Detroit_Red_Wings_logo.svg/1200px-Detroit_Red_Wings_logo.svg.png', 'Sports', 'Little Caesar''s Arena'),
--('Salsa', '2023-09-25', '2023-10-15', 'Detroit', 85, 'Salsa Dancing', 'https://media.npr.org/assets/img/2019/09/20/line-dancing-1_custom-77b14ee603afe73f2b616375c731ad407e4574c3.jpg', 'Dancing', 'Pavillion'),
--('Band Practice', '2023-11-15', '2023-10-15', 'Detroit', 50, 'Watch the band practice', 'https://bloximages.chicago2.vip.townnews.com/sharonherald.com/content/tncms/assets/v3/editorial/d/aa/daa9ba5e-349e-11ed-a51f-337c97aeaf1f/63228f179c700.image.jpg?resize=749%2C500', 'Music', 'The field');
