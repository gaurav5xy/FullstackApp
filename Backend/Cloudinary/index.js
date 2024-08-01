const cloudinary= require('cloudinary').v2; // Note: `.default` may be required based on the module setup


(async function () {
    try {
        // Configuration
        cloudinary.config({
            cloud_name: 'dd6i3evty',
            api_key: '874718465369617',
            api_secret: '96G4XHbdnj69lAGtAzhXiB3OPmw'
        });

        const images = ['./img/1.png',
            './img/2.png',
            './img/3.png',
            './img/4.png',
            './img/5.png',
            './img/6.png',
            './img/7.png',
            './img/8.png',
            './img/9.png',
            './img/10.png',
            './img/11.png',
            './img/12.png',
            './img/13.png',
            './img/14.png',
            './img/15.png',
            './img/16.png',
            './img/17.png',
            './img/18.png',
            './img/19.png',
            './img/20.png',
            './img/21.png',
            './img/22.png',
            './img/23.png',
            './img/24.png',
        ]

        for( const image of images ){
            // Upload an image
            const uploadResult = await cloudinary.uploader.upload(image, {
                folder: 'first_img', // Optional: Folder in Cloudinary where the image will be stored
            });
        }

        // console.log('Upload Result:', uploadResult);

        // Optimize delivery by resizing and applying auto-format and auto-quality
        const optimizeUrl = cloudinary.url(uploadResult.public_id, {
            fetch_format: 'auto',
            quality: 'auto'
        });

        console.log('Optimized URL:', optimizeUrl);

        // Transform the image: auto-crop to square aspect ratio
        const autoCropUrl = cloudinary.url(uploadResult.public_id, {
            crop: 'auto',
            gravity: 'auto',
            width: 500,
            height: 500,
        });

        console.log('Auto-cropped URL:', autoCropUrl);
    } catch (error) {
        console.error('Error:', error);
    }
})();
