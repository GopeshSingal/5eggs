# -*- coding: utf-8 -*-
"""txt2img.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1HYqsmpy8FYPsY0ZwK3oLdKzRfCHzmhIJ

The following is a **read-only** token from HuggingFace
"""

auth_token = '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'

"""Install requirements.txt"""

# !pip install accelerate
# !pip install diffusers
# !pip install transformers
# !pip install -r requirements.txt

# Machine Learning libraries
import torch
from torch import autocast
from diffusers import StableDiffusionPipeline
import matplotlib
from PIL import Image
import PIL

prompt = "Joe Biden vs Donald Trump"

# Download stable diffusion model from hugging face
modelid = "CompVis/stable-diffusion-v1-4"
device = "cuda"
stable_diffusion_model = StableDiffusionPipeline.from_pretrained(modelid, revision="fp16", torch_dtype=torch.float16, use_auth_token=auth_token)
stable_diffusion_model.to(device)

# Generate image from text
def generate_image():
    """ This function generate image from a text with stable diffusion"""
    with autocast(device):
        image = stable_diffusion_model(prompt,guidance_scale=8.5)["images"][0]
    return image

img = generate_image()
im0 = img.resize((16, 16))
im0 = im0.save(prompt + '.png')
matplotlib.pyplot.imshow(img)