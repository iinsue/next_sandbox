import { faker } from "@faker-js/faker";

export type Subtitle = {
  demoTranscribeCompleteIdx: number;
  transcription: string;
  startTime: number;
  endTime: number;
  marker: string;
  markerName: string;
};

const range = (length: number) => {
  const array: number[] = [];
  for (let i = 0; i < length; i++) {
    array.push(i);
  }
  return array;
};

const newSubtitles = (index: number): Subtitle => {
  return {
    demoTranscribeCompleteIdx: index + 1,
    transcription: faker.lorem.sentence(),
    startTime: faker.number.float({ min: 0, max: 599, precision: 0.001 }),
    endTime: faker.number.float({ min: 1, max: 600, precision: 0.001 }),
    marker: "",
    markerName: "",
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Subtitle[] => {
    const len = lens[depth]!;
    return range(len).map((d): Subtitle => {
      return {
        ...newSubtitles(d),
      };
    });
  };

  return makeDataLevel;
}
