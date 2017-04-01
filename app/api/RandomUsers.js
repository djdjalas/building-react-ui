import $ from 'jquery';

export const getUsers = (n, callback) => {
  $.get(`http://uinames.com/api/?ext&amount=${n}`, users => {
    callback(users);
    console.log(users);
  });
}

export const getRandomPicture = gender => {
  const randomNumber = Math.floor(Math.random() * 35) + 1;
  const pictureUrl = `http://uinames.com/api/photos/${gender}/${randomNumber}.jpg`;
  console.log(pictureUrl);
  return pictureUrl;
}
