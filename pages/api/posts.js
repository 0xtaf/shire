const posts = [
  {
    title: 'iyi bir bloğun 2983 özelliği',
    details: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Eget mi proin sed
  libero enim. Ultrices tincidunt arcu non sodales. Amet est placerat in
  egestas erat imperdiet sed euismod nisi. Morbi leo urna molestie at
  elementum eu. Suspendisse ultrices gravida dictum fusce ut. Nullam non
  nisi est sit amet. Eget mauris pharetra et ultrices. Auctor urna nunc id
  cursus metus aliquam eleifend. Quam nulla porttitor massa id neque
  aliquam vestibulum morbi blandit. Scelerisque mauris pellentesque
  pulvinar pellentesque habitant morbi tristique senectus. Sit amet dictum
  sit amet justo donec enim. Augue eget arcu dictum varius duis. Hendrerit
  dolor magna eget est lorem ipsum. Nec dui nunc mattis enim ut tellus
  elementum sagittis.`,
    date: '08 Nisan 2020',
  },
  {
    title: 'kötü bir bloğun 2983 özelliği',
    details: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Eget mi proin sed
  libero enim. Ultrices tincidunt arcu non sodales. Amet est placerat in
  egestas erat imperdiet sed euismod nisi. Morbi leo urna molestie at
  elementum eu. Suspendisse ultrices gravida dictum fusce ut. Nullam non
  nisi est sit amet. Eget mauris pharetra et ultrices. Auctor urna nunc id
  cursus metus aliquam eleifend. Quam nulla porttitor massa id neque
  aliquam vestibulum morbi blandit. Scelerisque mauris pellentesque
  pulvinar pellentesque habitant morbi tristique senectus. Sit amet dictum
  sit amet justo donec enim. Augue eget arcu dictum varius duis. Hendrerit
  dolor magna eget est lorem ipsum. Nec dui nunc mattis enim ut tellus
  elementum sagittis.`,
    date: '18 Nisan 2020',
  }
];

export default (req, res) => {
  res.json({ posts });
};
