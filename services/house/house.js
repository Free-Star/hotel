import { config } from '../../config/index';

function mockFetchHouseList() {
  const { delay } = require('../_utils/delay');
  const { getHousesList } = require('../../model/house');
  return delay().then(() => getHousesList());
}

export function fetchHouseList() {
  if (config.useMock) {
    return mockFetchHouseList();
  }
  return Promise.resolve([]);
}

function mockFetchHouseDetail(id) {
  const { delay } = require('../_utils/delay');
  const { getHouseDetail } = require('../../model/house');
  return delay().then(() => getHouseDetail(id));
}

export function fetchHouseDetail(id) {
  if (config.useMock) {
    return mockFetchHouseDetail(id);
  }
  return Promise.resolve({});
}
