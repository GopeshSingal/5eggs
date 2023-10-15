from PIL import Image
import json

with open('config.json', 'r') as f:
    data = json.load(f)

def combine_images(imgs):
    cols, rows = data['combined_image_length'], data['combined_image_width']
    result = Image.new("RGB", (rows * imgs[0].size[0], cols * imgs[0].size[1]))

    for i, img in enumerate(imgs):
        row = i // rows
        col = i % rows
        result.paste(img, (col * img.size[0], row * img.size[1]))

    return result

image_paths = ['image1.png', 'image2.png', 'image3.png', 'image4.png', 'image5.png', 'image6.png', 'image7.png', 'image8.png', 'image9.png', 'image10.png', 'image11.png', 'image12.png']
images = [Image.open(path) for path in image_paths]
combined_image = combine_images(images)
combined_image.show()