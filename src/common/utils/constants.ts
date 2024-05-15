export const success_code = 200;
export const star_success_code = 204;
export const fork_success_code = 201;

export function calculateWeightedScore(packageData: any) {
  const { communityInterest, downloadsCount } = packageData.evaluation.popularity;
  const { carefulness, tests } = packageData.evaluation.quality;

  const communityInterestWeight = 0.2;
  const downloadsWeight = 0.5;
  const testsCarefulnessWeight = 0.3;

  const weightedCommunityInterest = communityInterestWeight * communityInterest;
  const weightedDownloads = downloadsWeight * downloadsCount;
  const weightedTestsCarefulness = testsCarefulnessWeight * (tests + carefulness);

  return weightedCommunityInterest + weightedDownloads + weightedTestsCarefulness;
}
