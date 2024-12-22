// POLYFILLS
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position){
    return this.substr(position || 0, searchString.length) === searchString;
  };
}

// Collection details are generated here ---------------------------------------------------
function buildAllCollections() {
  var photoCollections = [];
  function addPhotoCollection(photoCollection) {
    photoCollections.push(photoCollection);
  }

  // 1 - New Zealand
  addPhotoCollection(buildPhotoCollection('New Zealand', [
    buildPhotoWithDescription('1nz/BNL_0172.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0167.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0176.JPG', ''),
    buildPhotoWithDescription('1nz/PC230026.JPG', ''),
    buildPhotoWithDescription('1nz/zBWR_08.jpg', ''),
    buildPhotoWithDescription('1nz/zLab_08.jpg', ''),
    buildPhotoWithDescription('1nz/BNL_0197.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0214.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0222.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0235.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0241.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0250.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0262.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0263.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0277.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0284.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0292.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0328.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0354.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0359.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0404.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0416.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0443.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0456.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0466.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0475.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0476.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0498.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0518.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0536.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0543.JPG', ''),
    buildPhotoWithDescription('1nz/jump.jpg', ''),
    buildPhotoWithDescription('1nz/fall.jpg', ''),
    buildPhotoWithDescription('1nz/bounce.jpg', ''),
    buildPhotoWithDescription('1nz/BNL_0557.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0565.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0567.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0572.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0590.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0592.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0594.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0604.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0621.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0625.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0626.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0630.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0640.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0684.JPG', ''),
  ]), 'Jan 2019');

  // 2 - Lauren Bday
  addPhotoCollection(buildPhotoCollection('Lauren\'s 30th Birthday', [
    buildPhotoWithDescription('2bday/IMG_0004.JPG', ''),
    buildPhotoWithDescription('2bday/IMG_0012.JPG', ''),
    buildPhotoWithDescription('2bday/IMG_0044.JPG', ''),
    buildPhotoWithDescription('2bday/IMG_3988.jpg', ''),
    buildPhotoWithDescription('2bday/IMG_3994.jpg', ''),
    buildPhotoWithDescription('2bday/IMG_4038.JPG', ''),
    buildPhotoWithDescription('2bday/IMG_4039.JPG', ''),
    buildPhotoWithDescription('2bday/IMG_4485.jpg', ''),
  ]), 'Jan 2019');

  // 3 - Ski
  addPhotoCollection(buildPhotoCollection('Ski Trip with Friends', [
    buildPhotoWithDescription('3ski/IMG_4594.jpg', ''),
    buildPhotoWithDescription('3ski/IMG_4589.jpg', ''),
    buildPhotoWithDescription('3ski/IMG_4590.jpg', ''),
    buildPhotoWithDescription('3ski/IMG_4628.jpg', ''),
    buildPhotoWithDescription('3ski/IMG_4633.JPEG', ''),
    buildPhotoWithDescription('3ski/IMG_6734.jpg', ''),
    buildPhotoWithDescription('3ski/IMG_6736.jpg', ''),
    buildPhotoWithDescription('3ski/IMG_6740.jpg', ''),
    buildPhotoWithDescription('3ski/IMG_6749.jpg', ''),
    buildPhotoWithDescription('3ski/IMG_6751.jpg', ''),
    buildPhotoWithDescription('3ski/IMG_6790.jpg', ''),
    buildPhotoWithDescription('3ski/IMG_6843.jpg', ''),
    buildPhotoWithDescription('3ski/IMG_6852.jpg', ''),
    buildPhotoWithDescription('3ski/IMG_6858.jpg', ''),
    buildPhotoWithDescription('3ski/IMG_6866.jpg', ''),
    buildPhotoWithDescription('3ski/IMG_7011.jpg', ''),
    buildPhotoWithDescription('3ski/IMG_7024.jpg', ''),
  ]), 'Feb 2019');

  // 4 - Tahoe
  addPhotoCollection(buildPhotoCollection('Tahoe Daytrip', [
    buildPhotoWithDescription('4ski2/IMG_4950.JPEG', ''),
    buildPhotoWithDescription('4ski2/IMG_4927.jpg', ''),
    buildPhotoWithDescription('4ski2/IMG_4931.jpg', ''),
    buildPhotoWithDescription('4ski2/IMG_4936.JPEG', ''),
    buildPhotoWithDescription('4ski2/IMG_4943.jpg', ''),
    buildPhotoWithDescription('4ski2/IMG_4956.jpg', ''),
    buildPhotoWithDescription('4ski2/IMG_4966.jpg', ''),
    buildPhotoWithDescription('4ski2/IMG_4979.JPEG', ''),
    buildPhotoWithDescription('4ski2/IMG_4980.JPEG', ''),
  ]), 'Mar 2019');

  // // 3? - Sonoma
  // addPhotoCollection(buildPhotoCollection('Sonoma Wine Tasting', [
  //   buildPhotoWithDescription('3sonoma/IMG_4326.JPEG', ''),
  //   buildPhotoWithDescription('3sonoma/IMG_4336.jpg', ''),
  //   buildPhotoWithDescription('3sonoma/IMG_4332.jpg', ''),
  //   buildPhotoWithDescription('3sonoma/IMG_4333.JPEG', ''),
  //   buildPhotoWithDescription('3sonoma/IMG_4340.jpg', ''),
  // ]), 'Apr 2019');

  // 5 - Disney
  addPhotoCollection(buildPhotoCollection('Disney!', [
    buildPhotoWithDescription('5disney/IMG_5083.JPG', ''),
    buildPhotoWithDescription('5disney/IMG_5091.JPG', ''),
    buildPhotoWithDescription('5disney/IMG_5107.jpg', ''),
    buildPhotoWithDescription('5disney/IMG_5096.jpg', ''),
    buildPhotoWithDescription('5disney/IMG_5119.jpg', ''),
    buildPhotoWithDescription('5disney/IMG_5166.JPG', ''),
    buildPhotoWithDescription('5disney/IMG_5168.JPG', ''),
    buildPhotoWithDescription('5disney/IMG_5169.jpg', ''),
  ]), 'Jan 2019');

  // 6 - 
  addPhotoCollection(buildPhotoCollection('San Diego', [
    buildPhotoWithDescription('6sandiego/IMG_5195.JPEG', ''),
    buildPhotoWithDescription('6sandiego/57627851882__3664561C-0190-47E3-9E55-AE2730291022.JPG', ''),
    buildPhotoWithDescription('6sandiego/IMG_5189.jpg', ''),
  ]), 'Jan 2019');

  // 7 - 
  addPhotoCollection(buildPhotoCollection('Wine Pairing Party', [
    buildPhotoWithDescription('7wine/IMG_0024.JPG', ''),
    buildPhotoWithDescription('7wine/IMG_5399.jpg', ''),
    buildPhotoWithDescription('7wine/IMG_0011.JPG', ''),
    buildPhotoWithDescription('7wine/IMG_0019.JPG', ''),
    buildPhotoWithDescription('7wine/IMG_0044.JPG', ''),
    buildPhotoWithDescription('7wine/IMG_5395.jpg', ''),
    buildPhotoWithDescription('7wine/IMG_5403.JPEG', ''),
    buildPhotoWithDescription('7wine/IMG_5406.jpg', ''),
    buildPhotoWithDescription('7wine/IMG_5408.jpg', ''),
  ]), 'Jan 2019');

  // 8 - 
  addPhotoCollection(buildPhotoCollection('Vanuatu', [
    buildPhotoWithDescription('8vanuatu/BNL_0197.JPG', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5546.jpg', ''),
    buildPhotoWithDescription('8vanuatu/BNL_0191.JPG', ''),
    buildPhotoWithDescription('8vanuatu/BNL_0289.JPG', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5535.jpg', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5541.jpg', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5550.jpg', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5552.jpg', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5554.jpg', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5555.jpg', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5556.jpg', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5558.jpg', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5560.jpg', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5561.jpg', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5563.jpg', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5566.jpg', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5575.JPEG', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5576.jpg', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5581.jpg', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5590.jpg', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5592.jpg', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5597.JPEG', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5604.jpg', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5605.jpg', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5617.jpg', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5624.JPEG', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5634.jpg', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5649.jpg', ''),
  ]), 'May 2019');

  // 9 - 
  addPhotoCollection(buildPhotoCollection('Fiji', [
    buildPhotoWithDescription('9fiji/bnl_0364.JPEG', ''),
    buildPhotoWithDescription('9fiji/IMG_5704.jpg', ''),
    buildPhotoWithDescription('9fiji/BNL_0357.JPG', ''),
    buildPhotoWithDescription('9fiji/BNL_0371.JPG', ''),
    buildPhotoWithDescription('9fiji/bnl_0435.jpg', ''),
    buildPhotoWithDescription('9fiji/BNL_0706.JPG', ''),
    buildPhotoWithDescription('9fiji/BNL_0716.JPG', ''),
    buildPhotoWithDescription('9fiji/BNL_0724.JPG', ''),
    buildPhotoWithDescription('9fiji/BNL_0798.JPG', ''),
    buildPhotoWithDescription('9fiji/bnl_0878.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5715.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5722.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5729.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5730.JPEG', ''),
    buildPhotoWithDescription('9fiji/IMG_5739.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5746.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5749.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5754.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5761.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5764.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5769.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5773.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5774.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5784.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5785.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5787.JPEG', ''),
    buildPhotoWithDescription('9fiji/IMG_5789.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5794.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5795.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5800.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5802.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5820.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5826.JPEG', ''),
    buildPhotoWithDescription('9fiji/IMG_5828.JPEG', ''),
    buildPhotoWithDescription('9fiji/IMG_5837.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5846.JPEG', ''),
    buildPhotoWithDescription('9fiji/IMG_5853.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5872.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5874.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5892.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5917.JPEG', ''),
    buildPhotoWithDescription('9fiji/IMG_5947.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_6003.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_6008.jpg', ''),
  ]), 'May 2019');

  // 10 - 
  addPhotoCollection(buildPhotoCollection('Cherry season', [
    buildPhotoWithDescription('10cherries/IMG_6370.JPEG', ''),
    buildPhotoWithDescription('10cherries/IMG_6375.JPEG', ''),
    buildPhotoWithDescription('10cherries/IMG_6378.jpg', ''),
    buildPhotoWithDescription('10cherries/IMG_6448.jpg', ''),
    buildPhotoWithDescription('10cherries/IMG_6477.jpg', ''),
    buildPhotoWithDescription('10cherries/IMG_6552.jpg', ''),
    buildPhotoWithDescription('10cherries/IMG_6554.jpg', ''),
  ]), 'May 2019');

  // 11 - 
  addPhotoCollection(buildPhotoCollection('2nd Anniversary', [
    buildPhotoWithDescription('11anniversary/IMG_6823.jpg', ''),
    buildPhotoWithDescription('11anniversary/IMG_6825.jpg', ''),
    buildPhotoWithDescription('11anniversary/IMG_6833.jpg', ''),
    buildPhotoWithDescription('11anniversary/IMG_6843.JPEG', ''),
    buildPhotoWithDescription('11anniversary/IMG_6849.jpg', ''),
    buildPhotoWithDescription('11anniversary/IMG_6862.jpg', ''),
    buildPhotoWithDescription('11anniversary/IMG_6864.jpg', ''),
    buildPhotoWithDescription('11anniversary/IMG_6870.jpg', ''),
    buildPhotoWithDescription('11anniversary/IMG_6882.jpg', ''),
    buildPhotoWithDescription('11anniversary/IMG_6885.JPEG', ''),
  ]), 'May 2019');

  // 12 - 
  addPhotoCollection(buildPhotoCollection('Floating Weekend', [
    buildPhotoWithDescription('12float/IMG_6956.jpg', ''),
    buildPhotoWithDescription('12float/IMG_6952.jpg', ''),
    buildPhotoWithDescription('12float/IMG_6960.jpg', ''),
    buildPhotoWithDescription('12float/IMG_7016.jpg', ''),
    buildPhotoWithDescription('12float/IMG_7039.JPEG', ''),
  ]), 'May 2019');

  // 13 - 
  addPhotoCollection(buildPhotoCollection('Salt Lake City trip', [
    buildPhotoWithDescription('13slc/IMG_8237.JPEG', ''),
    buildPhotoWithDescription('13slc/IMG_8229.jpg', ''),
    buildPhotoWithDescription('13slc/IMG_8244.jpg', ''),
    buildPhotoWithDescription('13slc/IMG_8166.jpg', ''),
    buildPhotoWithDescription('13slc/IMG_8175.jpg', ''),
    buildPhotoWithDescription('13slc/IMG_8178.JPEG', ''),
    buildPhotoWithDescription('13slc/IMG_8184.jpg', ''),
    buildPhotoWithDescription('13slc/IMG_8188.JPEG', ''),
    buildPhotoWithDescription('13slc/IMG_8197.jpg', ''),
    buildPhotoWithDescription('13slc/IMG_8205.jpg', ''),
  ]), 'May 2019');

  // 14 - 
  addPhotoCollection(buildPhotoCollection('The California Honeydrops', [
    buildPhotoWithDescription('14honeydrops/0914192053_HDR.jpg', ''),
    buildPhotoWithDescription('14honeydrops/0914192157a_HDR.jpg', ''),
    buildPhotoWithDescription('14honeydrops/0914192227_HDR.jpg', ''),
    buildPhotoWithDescription('14honeydrops/0914192307_HDR.jpg', ''),
    buildPhotoWithDescription('14honeydrops/IMG_8587.jpg', 'We spent the afternoon at the beach.'),
    buildPhotoWithDescription('14honeydrops/IMG_8597.jpg', 'We spent the afternoon at the beach.'),
  ]), 'May 2019');

  // 15 - 
  addPhotoCollection(buildPhotoCollection('Wedding Season', [
    buildPhotoWithDescription('15weddings/IMG_8663.jpg', ''),
    buildPhotoWithDescription('15weddings/IMG_8670.jpg', ''),
    buildPhotoWithDescription('15weddings/IMG_8676.jpg', ''),
    buildPhotoWithDescription('15weddings/IMG_8689.jpg', ''),
    buildPhotoWithDescription('15weddings/IMG_8896.jpg', ''),
    buildPhotoWithDescription('15weddings/IMG_8903.jpg', ''),
    buildPhotoWithDescription('15weddings/IMG_8920.jpg', ''),
    buildPhotoWithDescription('15weddings/IMG_9069.jpg', ''),
    buildPhotoWithDescription('15weddings/IMG_9164.JPG', ''),
    buildPhotoWithDescription('15weddings/IMG_9119.jpg', ''),
    buildPhotoWithDescription('15weddings/IMG_9123.jpg', ''),
    buildPhotoWithDescription('15weddings/IMG_9139.jpg', ''),
    buildPhotoWithDescription('15weddings/59406852934__D9C2930C-5BB8-4543-B2CD-242C834BD138.JPG', ''),
    buildPhotoWithDescription('15weddings/IMG_9156.jpg', ''),
    buildPhotoWithDescription('15weddings/IMG_9166.jpg', ''),
    buildPhotoWithDescription('15weddings/IMG_9167.jpg', ''),
    buildPhotoWithDescription('15weddings/IMG_9172.jpg', ''),
    buildPhotoWithDescription('15weddings/IMG_9181.jpg', ''),
    buildPhotoWithDescription('15weddings/IMG_9184.jpg', ''),
    buildPhotoWithDescription('15weddings/IMG_9194.jpg', ''),
    buildPhotoWithDescription('15weddings/IMG_9201.jpg', ''),
    buildPhotoWithDescription('15weddings/IMG_9207.jpg', ''),
    buildPhotoWithDescription('15weddings/IMG_9209.jpg', ''),
  ]), 'May 2019');

  // 16 - 
  addPhotoCollection(buildPhotoCollection('Mike + Sully 🦜', [
    buildPhotoWithDescription('16birds/IMG_9230.jpg', ''),
    buildPhotoWithDescription('16birds/IMG_9286.JPEG', ''),
    buildPhotoWithDescription('16birds/IMG_9288.JPG', ''),
    buildPhotoWithDescription('16birds/IMG_9564.jpg', ''),
  ]), 'May 2019');

  // 17 - 
  addPhotoCollection(buildPhotoCollection('Brendan\'s Sedona Birthday', [
    buildPhotoWithDescription('17bday/BNL_0016_Original.JPEG', ''),
    buildPhotoWithDescription('17bday/BNL_0020_Original.JPEG', ''),
    buildPhotoWithDescription('17bday/BNL_0029_Original.JPEG', ''),
    buildPhotoWithDescription('17bday/BNL_0033_Original.JPEG', ''),
    buildPhotoWithDescription('17bday/BNL_0110_Original.JPEG', ''),
    buildPhotoWithDescription('17bday/BNL_0132_Original.JPEG', ''),
    buildPhotoWithDescription('17bday/BNL_0160_Original.JPEG', ''),
    buildPhotoWithDescription('17bday/BNL_0166_Original.JPEG', ''),
    buildPhotoWithDescription('17bday/IMG_9336.jpg', ''),
    //buildPhotoWithDescription('17bday/IMG_9340.JPEG', ''),
    buildPhotoWithDescription('17bday/IMG_9348.jpg', ''),
    buildPhotoWithDescription('17bday/IMG_9352.jpg', ''),
    buildPhotoWithDescription('17bday/IMG_9363.jpg', ''),
    buildPhotoWithDescription('17bday/IMG_9365.jpg', ''),
    buildPhotoWithDescription('17bday/IMG_9376.JPEG', ''),
    buildPhotoWithDescription('17bday/IMG_9380.jpg', ''),
    buildPhotoWithDescription('17bday/IMG_9383.jpg', ''),
    buildPhotoWithDescription('17bday/IMG_9384.jpg', ''),
    buildPhotoWithDescription('17bday/IMG_9389.jpg', ''),
    buildPhotoWithDescription('17bday/IMG_9393.jpg', ''),
  ]), 'May 2019');

  // 18 - 
  addPhotoCollection(buildPhotoCollection('Thanksgiving', [
    buildPhotoWithDescription('18thanks/IMG_0250.jpeg', ''),
    buildPhotoWithDescription('18thanks/IMG_0253.jpeg', ''),
    buildPhotoWithDescription('18thanks/IMG_9502.jpg', ''),
    buildPhotoWithDescription('18thanks/IMG_9505.jpg', ''),
    buildPhotoWithDescription('18thanks/IMG_9507.JPG', ''),
    buildPhotoWithDescription('18thanks/IMG_9511.JPG', ''),
  ]), 'May 2019');

  // 19 - 
  addPhotoCollection(buildPhotoCollection('Family Photo Shoot', [
    buildPhotoWithDescription('19holiday/Berman_Holiday2019_InstaVersion_Camizzleful-100.jpg', ''),
    buildPhotoWithDescription('19holiday/Berman_Holiday2019_InstaVersion_Camizzleful-101.jpg', ''),
    buildPhotoWithDescription('19holiday/Berman_Holiday2019_InstaVersion_Camizzleful-102.jpg', ''),
    buildPhotoWithDescription('19holiday/Berman_Holiday2019_InstaVersion_Camizzleful-103.jpg', ''),
    buildPhotoWithDescription('19holiday/Berman_Holiday2019_InstaVersion_Camizzleful-104.jpg', ''),
    buildPhotoWithDescription('19holiday/Berman_Holiday2019_InstaVersion_Camizzleful-105.jpg', ''),
    buildPhotoWithDescription('19holiday/Berman_Holiday2019_InstaVersion_Camizzleful-106.jpg', ''),
    buildPhotoWithDescription('19holiday/Berman_Holiday2019_InstaVersion_Camizzleful-107.jpg', ''),
    buildPhotoWithDescription('19holiday/Berman_Holiday2019_InstaVersion_Camizzleful-108.jpg', ''),
    buildPhotoWithDescription('19holiday/Berman_Holiday2019_InstaVersion_Camizzleful-109.jpg', ''),
    buildPhotoWithDescription('19holiday/Berman_Holiday2019_InstaVersion_Camizzleful-110.jpg', ''),
    buildPhotoWithDescription('19holiday/Berman_Holiday2019_InstaVersion_Camizzleful-111.jpg', ''),
    buildPhotoWithDescription('19holiday/Berman_Holiday2019_InstaVersion_Camizzleful-112.jpg', ''),
    buildPhotoWithDescription('19holiday/Berman_Holiday2019_InstaVersion_Camizzleful-113.jpg', ''),
    buildPhotoWithDescription('19holiday/Berman_Holiday2019_InstaVersion_Camizzleful-114.jpg', ''),
    buildPhotoWithDescription('19holiday/Berman_Holiday2019_InstaVersion_Camizzleful-115.jpg', ''),
    buildPhotoWithDescription('19holiday/Berman_Holiday2019_InstaVersion_Camizzleful-116.jpg', ''),
    buildPhotoWithDescription('19holiday/Berman_Holiday2019_InstaVersion_Camizzleful-117.jpg', ''),
  ]), 'May 2019');

  // 20 - 
  addPhotoCollection(buildPhotoCollection('House', [
    buildPhotoWithDescription('20house/1107191151a.jpg', ''),
    buildPhotoWithDescription('20house/1107191151_HDR.jpg', ''),
    buildPhotoWithDescription('20house/1107191152_HDR.jpg', ''),
    buildPhotoWithDescription('20house/1107191148_HDR.jpg', 'Provonce Room'),
    buildPhotoWithDescription('20house/1107191148.jpg', 'Provonce Room'),
    buildPhotoWithDescription('20house/1211192022.jpg', 'Bird Room'),
    buildPhotoWithDescription('20house/1211192022a.jpg', 'Bird Room'),
    buildPhotoWithDescription('20house/1107191149.jpg', ''),
  ]), 'May 2019');
  return photoCollections;
}
// End of collection details  ----------------------------------------------------------------

function buildPhotoWithDescription(photoUrl, description) {
  return {
    url: './img/2019/' + photoUrl,
    description: description,
  };
}

function buildPhotoCollection(title, photosWithDescriptions, subtitle) {
  return {
    title: title,
    subtitle: subtitle,
    photos: photosWithDescriptions,
  };
}


function titleToClassName(title) {
  title = title.toLowerCase();
  // replace consecutive non-alphanumeric with a single dash
  return title.replace(/[^a-z0-9]+/g, '-');
}

function genFirstImage(photos) {
  var firstPhoto = photos[0];
  var i = document.createElement('img');
  i.src = firstPhoto.url;
  i.onload = resizeAllGridItems;
  var wrap = document.createElement('div');
  wrap.classList.add('collection-image');
  wrap.appendChild(i);
  return wrap;
}

function genCollectionDescription(photoCollection) {
  var description = document.createElement('div');
  description.classList.add('collection-description');
  var title = document.createElement('span');
  title.innerText = photoCollection.title;
  title.classList.add('collection-description--title');
  description.appendChild(title);
  if (photoCollection.subtitle) {
    var subtitle = document.createElement('span');
    subtitle.innerText = photoCollection.subtitle;
    subtitle.classList.add('collection-description--subtitle');
    description.appendChild(subtitle);
  }
  return description;
}

function genLightboxLinks(photos, collectionClassName) {
  // generate links for every photo
  var lightboxLinks = document.createElement('div');
  lightboxLinks.classList.add('lightbox-links')
  for (var i = 0; i < photos.length; i++) {
    var photo = photos[i];
    // create link to image
    var imgLink = document.createElement('a');
    imgLink.href = photo.url;
    imgLink.classList.add(collectionClassName);
    if (photo.description) {
      imgLink.title = photo.description;
    }
    // // add image inside of link
    // var img = document.createElement('img');
    // img.src = photo.url;
    // imgLink.appendChild(img);

    // add link to list of links
    lightboxLinks.appendChild(imgLink);
  }
  return lightboxLinks;
}

function attachLightboxListener(container, collectionClassName) {
  var gallery = halkaBox.run(collectionClassName, {});
  container.addEventListener('click', function(e) {
    // open the first image
    gallery.open(0);
  });
}

function genCollectionElements(photoCollection) {
  var collectionClassName = titleToClassName(photoCollection.title);
  // create container
  var container = document.createElement('div');
  container.classList.add('collection');
  // cover photo for the collection is the first image
  container.appendChild(genFirstImage(photoCollection.photos));
  // add title and subtitle
  container.appendChild(genCollectionDescription(photoCollection));
  // create links for lightbox to work
  container.appendChild(genLightboxLinks(photoCollection.photos, collectionClassName));
  return container;
}

function genCollectionElementsAndAppend(photoCollection, appendTo) {
  // a collection must have photos
  if (!photoCollection.photos.length) {
    return;
  }
  var collectionClassName = titleToClassName(photoCollection.title);
  var container = genCollectionElements(photoCollection);
  appendTo.appendChild(container);
  // attach listner for lightbox
  // NOTE: must be done _after_ the <a> img links are inserted into the DOM
  attachLightboxListener(container, collectionClassName);
}

function renderPhotoCollections(appDiv, photoCollections) {
  // add all photo collections to the DOM in order
  for (var i = 0; i < photoCollections.length; i++) {
    genCollectionElementsAndAppend(photoCollections[i], appDiv);
  }
}

function resizeGridItem(item, rowHeight, rowGap) {
  // get height of all children
  var height = 0;
  var children = item.children;
  for (var i = 0; i < children.length; i++) {
    var child = children.item(i);
    height = height + child.getBoundingClientRect().height;
  }
  var itemStyles = window.getComputedStyle(item, null);
  var paddingTop = parseInt(itemStyles.getPropertyValue('padding-top').match(/\d+/)[0], 10);
  var paddingBottom = parseInt(itemStyles.getPropertyValue('padding-bottom').match(/\d+/)[0], 10);
  height = height + paddingTop + paddingBottom;
  // calculate the number of grid spans to fit the div
  var rowSpan = Math.ceil((height + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
  var grid = document.querySelector(".grid");
  var rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  var rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  var allCollections = document.getElementsByClassName("collection");
  for (var i = 0; i < allCollections.length; i++) {
    resizeGridItem(allCollections[i], rowHeight, rowGap);
  }
}

function setupMasonry() {
  // run resize once, then listen for future browser resize events
  resizeAllGridItems();
  window.addEventListener("resize", resizeAllGridItems);
}

function main() {
  // Remove "no-js" class from <html> tag
  document.body.parentNode.className = '';

  var collectionsDiv = document.getElementById("photo-collections")

  // setup lightbox options
  halkaBox.options({
    animation: "slide",      // animation type on next/prev ("slide" || "fade")
    theme: "dark",          // lightbox overlay theme ("light" || "dark")
    preload: 3,              // number of images to preload
    isZoomable: true         // ability to zoom image (true || false)
  });

  // setup UI
  renderPhotoCollections(collectionsDiv, buildAllCollections());

  // setup Masonry Grid
  setupMasonry();
}

document.addEventListener("DOMContentLoaded", main);

