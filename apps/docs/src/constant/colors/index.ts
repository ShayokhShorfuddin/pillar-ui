import { Colors } from './colors.type'

const red = {
  light: [
    '359, 100%, 99.4%',
    '359, 100%, 98.6%',
    '360, 100%, 96.8%',
    '360, 97.9%, 94.8%',
    '360, 90.2%, 91.9%',
    '360, 81.7%, 87.8%',
    '359, 74.2%, 81.7%',
    '359, 69.5%, 74.3%',
    '358, 75.0%, 59.0%',
    '358, 69.4%, 55.2%',
    '358, 65.0%, 48.7%',
    '354, 50.0%, 14.6%',
  ],
  dark: [
    '353 23.0% 9.8%',
    '357 34.4% 12.0%',
    '356 43.4% 16.4%',
    '356 47.6% 19.2%',
    '356 51.1% 21.9%',
    '356 55.2% 25.9%',
    '357 60.2% 31.8%',
    '358 65.0% 40.4%',
    '358 75.0% 59.0%',
    '358 85.3% 64.0%',
    '358 100% 69.5%',
    '351 89.0% 96.0%',
  ],
}

const tomato = {
  light: [
    '10, 100%, 99.4%',
    '8, 100%, 98.4%',
    '8, 100%, 96.6%',
    '8, 100%, 94.3%',
    '8, 92.8%, 91.0%',
    '9, 84.7%, 86.3%',
    '10, 77.3%, 79.5%',
    '10, 71.6%, 71.0%',
    '10, 78.0%, 54.0%',
    '10, 71.5%, 50.0%',
    '10, 82.0%, 43.5%',
    '10, 50.0%, 13.5%',
  ],
  dark: [
    '10, 23.0%, 9.4%',
    '9, 44.8%, 11.4%',
    '8, 52.0%, 15.3%',
    '7, 56.3%, 18.0%',
    '7, 60.1%, 20.6%',
    '8, 64.8%, 24.0%',
    '8, 71.2%, 29.1%',
    '10, 80.2%, 35.7%',
    '10, 78.0%, 54.0%',
    '10, 81.7%, 59.0%',
    '10, 85.0%, 62.8%',
    '10, 89.0%, 96.0%',
  ],
}

const crimson = {
  light: [
    '332, 100%, 99.4%',
    '330, 100%, 98.4%',
    '331, 85.6%, 96.6%',
    '331, 78.1%, 94.2%',
    '332, 72.1%, 91.1%',
    '333, 67.0%, 86.7%',
    '335, 63.5%, 80.4%',
    '336, 62.3%, 72.9%',
    '336, 80.0%, 57.8%',
    '336, 73.7%, 53.5%',
    '336, 75.0%, 47.2%',
    '340, 65.0%, 14.5%',
  ],
  dark: [
    '335, 20.0%, 9.6%',
    '335, 32.2%, 11.6%',
    '335, 42.5%, 16.5%',
    '335, 47.2%, 19.3%',
    '335, 50.9%, 21.8%',
    '335, 55.7%, 25.3%',
    '336, 62.9%, 30.8%',
    '336, 74.9%, 39.0%',
    '336, 80.0%, 57.8%',
    '339, 84.1%, 62.6%',
    '341, 90.0%, 67.3%',
    '332, 87.0%, 96.0%',
  ],
}

const pink = {
  light: [
    '322, 100%, 99.4%',
    '323, 100%, 98.4%',
    '323, 86.3%, 96.5%',
    '323, 78.7%, 94.2%',
    '323, 72.2%, 91.1%',
    '323, 66.3%, 86.6%',
    '323, 62.0%, 80.1%',
    '323, 60.3%, 72.4%',
    '322, 65.0%, 54.5%',
    '322, 63.9%, 50.7%',
    '322, 75.0%, 46.0%',
    '320, 70.0%, 13.5%',
  ],
  dark: [
    '318, 25.0%, 9.6%',
    '319, 32.2%, 11.6%',
    '319, 41.0%, 16.0%',
    '320, 45.4%, 18.7%',
    '320, 49.0%, 21.1%',
    '321, 53.6%, 24.4%',
    '321, 61.1%, 29.7%',
    '322, 74.9%, 37.5%',
    '322, 65.0%, 54.5%',
    '323, 72.8%, 59.2%',
    '325, 90.0%, 66.4%',
    '322, 90.0%, 95.8%',
  ],
}

const plum = {
  light: [
    '292, 90.0%, 99.4%',
    '300, 100%, 98.6%',
    '299, 71.2%, 96.4%',
    '299, 62.0%, 93.8%',
    '298, 56.1%, 90.5%',
    '296, 51.3%, 85.8%',
    '295, 48.2%, 78.9%',
    '292, 47.7%, 70.8%',
    '292, 45.0%, 51.0%',
    '292, 50.2%, 46.9%',
    '292, 60.0%, 42.5%',
    '291, 66.0%, 14.0%',
  ],
  dark: [
    '301, 20.0%, 9.4%',
    '300, 29.8%, 11.2%',
    '298, 34.4%, 15.3%',
    '297, 36.8%, 18.3%',
    '296, 38.5%, 21.1%',
    '295, 40.4%, 24.7%',
    '294, 42.7%, 30.6%',
    '292, 45.1%, 40.0%',
    '292, 45.0%, 51.0%',
    '295, 50.0%, 55.4%',
    '300, 60.0%, 62.0%',
    '296, 74.0%, 95.7%',
  ],
}

const purple = {
  light: [
    '280, 65.0%, 99.4%',
    '276, 100%, 99.0%',
    '276, 83.1%, 97.0%',
    '275, 76.4%, 94.7%',
    '275, 70.8%, 91.8%',
    '274, 65.4%, 87.8%',
    '273, 61.0%, 81.7%',
    '272, 60.0%, 73.5%',
    '272, 51.0%, 54.0%',
    '272, 46.8%, 50.3%',
    '272, 50.0%, 45.8%',
    '272, 66.0%, 16.0%',
  ],
  dark: [
    '284, 20.0%, 9.6%',
    '283, 30.0%, 11.8%',
    '281, 37.5%, 16.5%',
    '280, 41.2%, 20.0%',
    '279, 43.8%, 23.3%',
    '277, 46.4%, 27.5%',
    '275, 49.3%, 34.6%',
    '272, 52.1%, 45.9%',
    '272, 51.0%, 54.0%',
    '273, 57.3%, 59.1%',
    '275, 80.0%, 71.0%',
    '279, 75.0%, 95.7%',
  ],
}
const secondary = {
  light: [
    '255, 65.0%, 99.4%',
    '252, 100%, 99.0%',
    '252, 96.9%, 97.4%',
    '252, 91.5%, 95.5%',
    '252, 85.1%, 93.0%',
    '252, 77.8%, 89.4%',
    '252, 71.0%, 83.7%',
    '252, 68.6%, 76.3%',
    '252, 56.0%, 57.5%',
    '251, 48.1%, 53.5%',
    '250, 43.0%, 48.0%',
    '254, 60.0%, 18.5%',
  ],
  dark: [
    '250, 20.0%, 10.2%',
    '255, 30.3%, 12.9%',
    '253, 37.0%, 18.4%',
    '252, 40.1%, 22.5%',
    '252, 42.2%, 26.2%',
    '251, 44.3%, 31.1%',
    '250, 46.8%, 38.9%',
    '250, 51.8%, 51.2%',
    '252, 56.0%, 57.5%',
    '251, 63.2%, 63.2%',
    '250, 95.0%, 76.8%',
    '252, 87.0%, 96.4%',
  ],
}
const primary = {
  light: [
    '225, 60.0%, 99.4%',
    '223, 100%, 98.6%',
    '223, 98.4%, 97.1%',
    '223, 92.9%, 95.0%',
    '224, 87.1%, 92.0%',
    '224, 81.9%, 87.8%',
    '225, 77.4%, 82.1%',
    '226, 75.4%, 74.5%',
    '226, 70.0%, 55.5%',
    '226, 58.6%, 51.3%',
    '226, 55.0%, 45.0%',
    '226, 62.0%, 17.0%',
  ],
  dark: [
    '229, 24.0%, 10.0%',
    '230, 36.4%, 12.9%',
    '228, 43.3%, 17.5%',
    '227, 47.2%, 21.0%',
    '227, 50.0%, 24.1%',
    '226, 52.9%, 28.2%',
    '226, 56.0%, 34.5%',
    '226, 58.2%, 44.1%',
    '226, 70.0%, 55.5%',
    '227, 75.2%, 61.6%',
    '228, 100%, 75.9%',
    '226, 83.0%, 96.3%',
  ],
}
const blue = {
  light: [
    '206, 100%, 99.2%',
    '210, 100%, 98.0%',
    '209, 100%, 96.5%',
    '210, 98.8%, 94.0%',
    '209, 95.0%, 90.1%',
    '209, 81.2%, 84.5%',
    '208, 77.5%, 76.9%',
    '206, 81.9%, 65.3%',
    '206, 100%, 50.0%',
    '208, 100%, 47.3%',
    '211, 100%, 43.2%',
    '211, 100%, 15.0%',
  ],
  dark: [
    '212, 35.0%, 9.2%',
    '216, 50.0%, 11.8%',
    '214, 59.4%, 15.3%',
    '214, 65.8%, 17.9%',
    '213, 71.2%, 20.2%',
    '212, 77.4%, 23.1%',
    '211, 85.1%, 27.4%',
    '211, 89.7%, 34.1%',
    '206, 100%, 50.0%',
    '209, 100%, 60.6%',
    '210, 100%, 66.1%',
    '206, 98.0%, 95.8%',
  ],
}
const cyan = {
  light: [
    '185, 60.0%, 98.7%',
    '185, 73.3%, 97.1%',
    '186, 70.2%, 94.4%',
    '186, 63.8%, 90.6%',
    '187, 58.3%, 85.4%',
    '188, 54.6%, 78.4%',
    '189, 53.7%, 68.7%',
    '189, 60.3%, 52.5%',
    '190, 95.0%, 39.0%',
    '191, 91.2%, 36.8%',
    '192, 85.0%, 31.0%',
    '192, 88.0%, 12.5%',
  ],
  dark: [
    '192, 60.0%, 7.2%',
    '192, 71.4%, 8.2%',
    '192, 75.9%, 10.8%',
    '192, 79.3%, 12.8%',
    '192, 82.5%, 14.6%',
    '192, 86.6%, 16.9%',
    '192, 92.6%, 20.1%',
    '192, 100%, 24.5%',
    '190, 95.0%, 39.0%',
    '188, 100%, 40.0%',
    '186, 100%, 42.2%',
    '185, 73.0%, 93.2%',
  ],
}
const teal = {
  light: [
    '165, 60.0%, 98.8%',
    '169, 64.7%, 96.7%',
    '169, 59.8%, 94.0%',
    '169, 53.1%, 90.2%',
    '170, 47.1%, 85.0%',
    '170, 42.6%, 77.9%',
    '170, 39.9%, 68.1%',
    '172, 42.1%, 52.5%',
    '173, 80.0%, 36.0%',
    '173, 83.4%, 32.5%',
    '174, 90.0%, 25.2%',
    '170, 50.0%, 12.5%',
  ],
  dark: [
    '168, 48.0%, 6.5%',
    '169, 77.8%, 7.1%',
    '170, 76.1%, 9.2%',
    '171, 75.8%, 11.0%',
    '171, 75.7%, 12.8%',
    '172, 75.8%, 15.1%',
    '172, 76.7%, 18.6%',
    '173, 80.2%, 23.7%',
    '173, 80.0%, 36.0%',
    '174, 83.9%, 38.2%',
    '174, 90.0%, 40.7%',
    '166, 73.0%, 93.1%',
  ],
}
const green = {
  light: [
    '136, 50.0%, 98.9%',
    '138, 62.5%, 96.9%',
    '139, 55.2%, 94.5%',
    '140, 48.7%, 91.0%',
    '141, 43.7%, 86.0%',
    '143, 40.3%, 79.0%',
    '146, 38.5%, 69.0%',
    '151, 40.2%, 54.1%',
    '151, 55.0%, 41.5%',
    '152, 57.5%, 37.6%',
    '153, 67.0%, 28.5%',
    '155, 40.0%, 14.0%',
  ],
  dark: [
    '146, 30.0%, 7.4%',
    '155, 44.2%, 8.4%',
    '155, 46.7%, 10.9%',
    '154, 48.4%, 12.9%',
    '154, 49.7%, 14.9%',
    '154, 50.9%, 17.6%',
    '153, 51.8%, 21.8%',
    '151, 51.7%, 28.4%',
    '151, 55.0%, 41.5%',
    '151, 49.3%, 46.5%',
    '151, 50.0%, 53.2%',
    '137, 72.0%, 94.0%',
  ],
}
const grass = {
  light: [
    '116, 50.0%, 98.9%',
    '120, 60.0%, 97.1%',
    '120, 53.6%, 94.8%',
    '121, 47.5%, 91.4%',
    '122, 42.6%, 86.5%',
    '124, 39.0%, 79.7%',
    '126, 37.1%, 70.2%',
    '131, 38.1%, 56.3%',
    '131, 41.0%, 46.5%',
    '132, 43.1%, 42.2%',
    '133, 50.0%, 32.5%',
    '130, 30.0%, 14.9%',
  ],
  dark: [
    '146, 30.0%, 7.4%',
    '136, 33.3%, 8.8%',
    '137, 36.0%, 11.4%',
    '137, 37.6%, 13.7%',
    '136, 38.7%, 16.0%',
    '135, 39.6%, 19.1%',
    '134, 40.3%, 23.8%',
    '131, 40.1%, 30.8%',
    '131, 41.0%, 46.5%',
    '131, 39.0%, 52.1%',
    '131, 43.0%, 57.2%',
    '137, 72.0%, 94.0%',
  ],
}
const orange = {
  light: [
    '24, 70.0%, 99.0%',
    '24, 83.3%, 97.6%',
    '24, 100%, 95.3%',
    '25, 100%, 92.2%',
    '25, 100%, 88.2%',
    '25, 100%, 82.8%',
    '24, 100%, 75.3%',
    '24, 94.5%, 64.3%',
    '24, 94.0%, 50.0%',
    '24, 100%, 46.5%',
    '24, 100%, 37.0%',
    '15, 60.0%, 17.0%',
  ],
  dark: [
    '30, 70.0%, 7.2%',
    '28, 100%, 8.4%',
    '26, 91.1%, 11.6%',
    '25, 88.3%, 14.1%',
    '24, 87.6%, 16.6%',
    '24, 88.6%, 19.8%',
    '24, 92.4%, 24.0%',
    '25, 100%, 29.0%',
    '24, 94.0%, 50.0%',
    '24, 100%, 58.5%',
    '24, 100%, 62.2%',
    '24, 97.0%, 93.2%',
  ],
}
const brown = {
  light: [
    '30, 40.0%, 99.1%',
    '30, 50.0%, 97.6%',
    '30, 52.5%, 94.6%',
    '30, 53.0%, 91.2%',
    '29, 52.9%, 86.8%',
    '29, 52.5%, 80.9%',
    '29, 51.5%, 72.8%',
    '28, 50.0%, 63.1%',
    '28, 34.0%, 51.0%',
    '27, 31.8%, 47.6%',
    '25, 30.0%, 41.0%',
    '20, 30.0%, 19.0%',
  ],
  dark: [
    '22, 15.0%, 8.7%',
    '20, 28.3%, 10.4%',
    '20, 28.0%, 14.0%',
    '21, 28.4%, 16.5%',
    '22, 28.7%, 18.9%',
    '23, 29.0%, 22.3%',
    '25, 29.5%, 27.8%',
    '27, 30.1%, 35.9%',
    '28, 34.0%, 51.0%',
    '28, 41.4%, 55.8%',
    '28, 60.0%, 64.5%',
    '30, 67.0%, 94.0%',
  ],
}

// Bright Color

const sky = {
  light: [
    '193, 100%, 98.8%',
    '193, 100%, 97.3%',
    '193, 99.0%, 94.7%',
    '193, 91.4%, 91.4%',
    '194, 82.0%, 86.6%',
    '194, 74.1%, 79.5%',
    '194, 72.3%, 69.6%',
    '193, 77.9%, 53.9%',
    '193, 98.0%, 70.0%',
    '193, 87.0%, 66.5%',
    '195, 100%, 31.5%',
    '195, 100%, 13.0%',
  ],
  dark: [
    '205, 45.0%, 8.6%',
    '202, 71.4%, 9.6%',
    '201, 74.6%, 12.2%',
    '201, 77.4%, 14.4%',
    '200, 80.3%, 16.5%',
    '200, 84.1%, 18.9%',
    '199, 90.2%, 22.1%',
    '198, 100%, 26.1%',
    '193, 98.0%, 70.0%',
    '192, 100%, 77.0%',
    '192, 85.0%, 55.8%',
    '198, 98.0%, 95.8%',
  ],
}
const mint = {
  light: [
    '165, 80.0%, 98.8%',
    '164, 88.2%, 96.7%',
    '164, 76.6%, 93.3%',
    '165, 68.8%, 89.5%',
    '165, 60.6%, 84.5%',
    '165, 53.5%, 76.9%',
    '166, 50.7%, 66.1%',
    '168, 52.8%, 51.0%',
    '167, 65.0%, 66.0%',
    '167, 59.3%, 63.1%',
    '172, 72.0%, 28.5%',
    '172, 70.0%, 12.0%',
  ],
  dark: [
    '173, 50.0%, 6.6%',
    '176, 73.0%, 7.3%',
    '175, 79.3%, 8.9%',
    '174, 84.8%, 10.3%',
    '174, 90.2%, 11.9%',
    '173, 96.0%, 13.8%',
    '172, 100%, 16.8%',
    '170, 100%, 21.4%',
    '167, 65.0%, 66.0%',
    '163, 80.0%, 77.0%',
    '167, 70.0%, 48.0%',
    '165, 80.0%, 94.8%',
  ],
}
const lime = {
  light: [
    '85, 50.0%, 98.7%',
    '85, 66.7%, 96.5%',
    '85, 76.0%, 92.3%',
    '84, 75.3%, 87.5%',
    '84, 71.5%, 81.9%',
    '82, 65.0%, 74.6%',
    '79, 53.2%, 61.8%',
    '76, 61.7%, 45.1%',
    '81, 67.0%, 50.0%',
    '80, 68.3%, 46.9%',
    '75, 80.0%, 26.0%',
    '78, 70.0%, 11.5%',
  ],
  dark: [
    '75, 55.0%, 6.0%',
    '74, 56.8%, 7.3%',
    '78, 50.2%, 9.9%',
    '79, 50.3%, 12.1%',
    '79, 52.6%, 14.2%',
    '78, 55.7%, 16.7%',
    '77, 59.7%, 20.1%',
    '75, 64.8%, 24.5%',
    '81, 67.0%, 50.0%',
    '75, 85.0%, 60.0%',
    '81, 70.0%, 43.8%',
    '84, 79.0%, 92.6%',
  ],
}
const yellow = {
  light: [
    '60, 54.0%, 98.5%',
    '52, 100%, 95.5%',
    '55, 100%, 90.9%',
    '54, 100%, 86.6%',
    '52, 97.9%, 82.0%',
    '50, 89.4%, 76.1%',
    '47, 80.4%, 68.0%',
    '48, 100%, 46.1%',
    '53, 92.0%, 50.0%',
    '50, 100%, 48.5%',
    '42, 100%, 29.0%',
    '40, 55.0%, 13.5%',
  ],
  dark: [
    '45, 100%, 5.5%',
    '46, 100%, 6.7%',
    '45, 100%, 8.7%',
    '45, 100%, 10.4%',
    '47, 100%, 12.1%',
    '49, 100%, 14.3%',
    '49, 90.3%, 18.4%',
    '50, 100%, 22.0%',
    '53, 92.0%, 50.0%',
    '54, 100%, 68.0%',
    '48, 100%, 47.0%',
    '53, 100%, 91.0%',
  ],
}
const amber = {
  light: [
    '39, 70.0%, 99.0%',
    '40, 100%, 96.5%',
    '44, 100%, 91.7%',
    '43, 100%, 86.8%',
    '42, 100%, 81.8%',
    '38, 99.7%, 76.3%',
    '36, 86.1%, 67.1%',
    '35, 85.2%, 55.1%',
    '39, 100%, 57.0%',
    '35, 100%, 55.5%',
    '30, 100%, 34.0%',
    '20, 80.0%, 17.0%',
  ],
  dark: [
    '36, 100%, 6.1%',
    '35, 100%, 7.6%',
    '32, 100%, 10.2%',
    '32, 100%, 12.4%',
    '33, 100%, 14.6%',
    '35, 100%, 17.1%',
    '35, 91.0%, 21.6%',
    '36, 100%, 25.5%',
    '39, 100%, 57.0%',
    '43, 100%, 64.0%',
    '39, 90.0%, 49.8%',
    '39, 97.0%, 93.2%',
  ],
}

const gray = {
  light: [
    '0, 0%, 99.0%',
    '0, 0%, 97.3%',
    '0, 0%, 95.1%',
    '0, 0%, 93.0%',
    '0, 0%, 90.9%',
    '0, 0%, 88.7%',
    '0, 0%, 85.8%',
    '0, 0%, 78.0%',
    '0, 0%, 56.1%',
    '0, 0%, 52.3%',
    '0, 0%, 43.5%',
    '0, 0%, 9.0%',
  ],
  dark: [
    '0, 0%, 8.5%',
    '0, 0%, 11.0%',
    '0, 0%, 13.6%',
    '0, 0%, 15.8%',
    '0, 0%, 17.9%',
    '0, 0%, 20.5%',
    '0, 0%, 24.3%',
    '0, 0%, 31.2%',
    '0, 0%, 43.9%',
    '0, 0%, 49.4%',
    '0, 0%, 62.8%',
    '0, 0%, 93.0%',
  ],
}
const mauve = {
  light: [
    '300, 20.0%, 99.0%',
    '300, 7.7%, 97.5%',
    '294, 5.5%, 95.3%',
    '289, 4.7%, 93.3%',
    '283, 4.4%, 91.3%',
    '278, 4.1%, 89.1%',
    '271, 3.9%, 86.3%',
    '255, 3.7%, 78.8%',
    '252, 4.0%, 57.3%',
    '253, 3.5%, 53.5%',
    '252, 4.0%, 44.8%',
    '260, 25.0%, 11.0%',
  ],
  dark: [
    '246, 6.0%, 9.0%',
    '240, 5.1%, 11.6%',
    '241, 5.0%, 14.3%',
    '242, 4.9%, 16.5%',
    '243, 4.9%, 18.8%',
    '244, 4.9%, 21.5%',
    '245, 4.9%, 25.4%',
    '247, 4.8%, 32.5%',
    '252, 4.0%, 45.2%',
    '247, 3.4%, 50.7%',
    '253, 4.0%, 63.7%',
    '256, 6.0%, 93.2%',
  ],
}
const bg = {
  light: [
    '206, 30.0%, 98.8%',
    '210, 16.7%, 97.6%',
    '209, 13.3%, 95.3%',
    '209, 12.2%, 93.2%',
    '208, 11.7%, 91.1%',
    '208, 11.3%, 88.9%',
    '207, 11.1%, 85.9%',
    '205, 10.7%, 78.0%',
    '206, 6.0%, 56.1%',
    '206, 5.8%, 52.3%',
    '206, 6.0%, 43.5%',
    '206, 24.0%, 9.0%',
  ],
  dark: [
    '200, 7.0%, 8.8%',
    '195, 7.1%, 11.0%',
    '197, 6.8%, 13.6%',
    '198, 6.6%, 15.8%',
    '199, 6.4%, 17.9%',
    '201, 6.2%, 20.5%',
    '203, 6.0%, 24.3%',
    '207, 5.6%, 31.6%',
    '206, 6.0%, 43.9%',
    '206, 5.2%, 49.5%',
    '206, 6.0%, 63.0%',
    '210, 6.0%, 93.0%',
  ],
}
const sage = {
  light: [
    '155, 30.0%, 98.8%',
    '150, 16.7%, 97.6%',
    '151, 10.6%, 95.2%',
    '151, 8.8%, 93.0%',
    '151, 7.8%, 90.8%',
    '152, 7.2%, 88.4%',
    '153, 6.7%, 85.3%',
    '154, 6.1%, 77.5%',
    '155, 3.5%, 55.5%',
    '154, 2.8%, 51.7%',
    '155, 3.0%, 43.0%',
    '155, 24.0%, 9.0%',
  ],
  dark: [
    '155, 7.0%, 8.4%',
    '150, 7.4%, 10.6%',
    '150, 6.7%, 13.1%',
    '150, 6.4%, 15.3%',
    '150, 6.1%, 17.4%',
    '150, 5.8%, 19.9%',
    '150, 5.5%, 23.6%',
    '150, 5.1%, 30.6%',
    '155, 6.0%, 42.5%',
    '153, 4.8%, 48.2%',
    '155, 5.0%, 61.8%',
    '155, 6.0%, 93.0%',
  ],
}

const olive = {
  light: [
    '110, 20.0%, 99.0%',
    '120, 16.7%, 97.6%',
    '119, 10.1%, 95.2%',
    '118, 8.1%, 93.0%',
    '117, 7.1%, 90.8%',
    '115, 6.4%, 88.5%',
    '114, 5.9%, 85.4%',
    '110, 5.2%, 77.3%',
    '110, 3.5%, 55.5%',
    '111, 2.8%, 51.7%',
    '110, 3.0%, 43.0%',
    '110, 25.0%, 9.5%',
  ],
  dark: [
    '110, 5.0%, 8.6%',
    '105, 7.4%, 10.6%',
    '106, 6.4%, 13.1%',
    '106, 5.8%, 15.3%',
    '107, 5.3%, 17.4%',
    '107, 4.9%, 19.9%',
    '108, 4.4%, 23.6%',
    '110, 3.8%, 30.6%',
    '110, 6.0%, 42.5%',
    '111, 4.8%, 48.2%',
    '110, 5.0%, 61.8%',
    '110, 6.0%, 93.0%',
  ],
}
const sand = {
  light: [
    '50, 20.0%, 99.0%',
    '60, 7.7%, 97.5%',
    '59, 6.5%, 95.1%',
    '58, 6.1%, 92.9%',
    '57, 6.0%, 90.7%',
    '56, 5.9%, 88.4%',
    '55, 5.9%, 85.2%',
    '51, 6.0%, 77.1%',
    '50, 2.0%, 55.7%',
    '55, 1.7%, 51.9%',
    '50, 2.0%, 43.1%',
    '50, 6.0%, 10.0%',
  ],
  dark: [
    '61, 2.0%, 8.3%',
    '60, 3.7%, 10.6%',
    '58, 3.7%, 13.1%',
    '57, 3.6%, 15.3%',
    '56, 3.7%, 17.4%',
    '55, 3.7%, 19.9%',
    '53, 3.7%, 23.6%',
    '50, 3.8%, 30.6%',
    '50, 4.0%, 42.7%',
    '52, 3.1%, 48.3%',
    '50, 4.0%, 61.8%',
    '56, 4.0%, 92.8%',
  ],
}
const bronze = {
  light: [
    '15, 30.0%, 99.1%',
    '17, 63.6%, 97.8%',
    '17, 42.1%, 95.2%',
    '17, 35.2%, 92.1%',
    '17, 31.5%, 88.2%',
    '17, 29.0%, 83.0%',
    '17, 26.9%, 75.6%',
    '17, 25.1%, 66.5%',
    '17, 20.0%, 54.0%',
    '17, 18.1%, 50.1%',
    '15, 20.0%, 43.1%',
    '12, 22.0%, 21.5%',
  ],
  dark: [
    '17, 10.0%, 8.8%',
    '15, 14.8%, 10.6%',
    '15, 16.3%, 14.3%',
    '16, 17.1%, 17.2%',
    '16, 17.6%, 19.6%',
    '16, 18.1%, 22.9%',
    '17, 18.8%, 28.8%',
    '17, 19.6%, 38.0%',
    '17, 20.0%, 54.0%',
    '18, 24.0%, 59.0%',
    '18, 35.0%, 68.5%',
    '18, 57.0%, 94.1%',
  ],
}
const gold = {
  light: [
    '50, 20.0%, 99.1%',
    '47, 52.9%, 96.7%',
    '46, 38.2%, 93.7%',
    '44, 32.7%, 90.1%',
    '43, 29.9%, 85.7%',
    '41, 28.3%, 79.8%',
    '39, 27.6%, 71.9%',
    '36, 27.2%, 61.8%',
    '36, 20.0%, 49.5%',
    '36, 19.8%, 45.7%',
    '36, 20.0%, 39.0%',
    '36, 16.0%, 20.0%',
  ],
  dark: [
    '44, 9.0%, 8.3%',
    '43, 14.3%, 9.6%',
    '42, 15.5%, 13.0%',
    '41, 16.4%, 15.6%',
    '41, 16.9%, 17.8%',
    '40, 17.6%, 20.8%',
    '38, 18.5%, 26.4%',
    '36, 19.6%, 35.1%',
    '36, 20.0%, 49.5%',
    '36, 22.3%, 54.5%',
    '35, 30.0%, 64.0%',
    '49, 52.0%, 93.8%',
  ],
}
export const COLORS: Colors = {
  red,
  tomato,
  crimson,
  pink,
  plum,
  purple,
  secondary,
  primary,
  blue,
  cyan,
  teal,
  green,
  grass,
  orange,
  brown,
  sky,
  mint,
  lime,
  yellow,
  amber,
  gray,
  mauve,
  bg,
  sage,
  olive,
  sand,
  bronze,
  gold,
}
