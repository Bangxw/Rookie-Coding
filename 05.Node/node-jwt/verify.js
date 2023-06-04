const jwt = require('jsonwebtoken')

const tokenString = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmFzciIsImFkbWluIjp0cnVlLCJpYXQiOjE2ODUwNzIyMzQsImV4cCI6MTY4NTA3NTgzNH0.FXvHKGlRJkegAUMJf_1yr6EAvk43yxIGvMSPRZbFb6s"

jwt.verify(tokenString, '小鸡炖蘑菇', (err, encode) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(encode)
})