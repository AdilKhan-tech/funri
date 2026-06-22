const sequelize = require('./config/database');
const Product = require('./models/Product');

const updateProducts = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to database');

    // Spray images array
    const sprayImages = [
      '/uploads/ChatGPT Image Jun 22, 2026, 03_59_34 PM.png',
      '/uploads/ChatGPT Image Jun 22, 2026, 04_02_27 PM.png',
      '/uploads/ChatGPT Image Jun 22, 2026, 04_12_58 PM.png',
      '/uploads/ChatGPT Image Jun 22, 2026, 04_13_19 PM.png',
      '/uploads/a.png',
      '/uploads/davinci_luxury_perfume_advertisement_for_al_sohail_trader_.png',
      '/uploads/regal_perfume_advertisement_al_sohail.webp'
    ];

    // Find all sofa products and update to spray with new images
    const sofas = await Product.findAll({
      where: {
        category: 'Sofa'
      }
    });

    console.log(`Found ${sofas.length} sofa products`);

    for (let i = 0; i < sofas.length; i++) {
      const sofa = sofas[i];
      const newImage = sprayImages[i % sprayImages.length]; // Cycle through images
      
      await sofa.update({
        product_name: sofa.product_name.replace(/Sofa/gi, 'Spray').replace(/Couch/gi, 'Spray'),
        category: 'Spray',
        product_image: newImage,
        description: sofa.description ? sofa.description.replace(/sofa/gi, 'spray').replace(/couch/gi, 'spray') : null
      });
      console.log(`Updated: ${sofa.product_name} → Image: ${newImage}`);
    }

    console.log('\nAll sofas updated to spray with new images!');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

updateProducts();
