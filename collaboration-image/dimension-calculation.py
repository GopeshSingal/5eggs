import numpy as np
import json

valid_dimensions = [
    [4, 3, 12], 
    [5, 4, 20], 
    [16, 9, 144]
]

with open('config.json', 'r') as f:
    data = json.load(f)
cnt = data['user_submissions']

if cnt < 12:
    data['combined_image_length'] = valid_dimensions[0][0]
    data['combined_image_width'] = valid_dimensions[0][1]
    data['generated_submissions'] = 12 - cnt
    with open('config.json', 'w') as f:
        json.dump(data, f, indent=4)

def best_dimension():
    while valid_dimensions[0][2] < cnt or valid_dimensions[1][2] < cnt or valid_dimensions[2][2] < cnt:
        if valid_dimensions[0][2] < cnt:
            valid_dimensions[0][0] *= 2
            valid_dimensions[0][1] *= 2
            valid_dimensions[0][2] *= 4
        if valid_dimensions[1][2] < cnt:
            valid_dimensions[1][0] *= 2
            valid_dimensions[1][1] *= 2
            valid_dimensions[1][2] *= 4
        if valid_dimensions[2][2] < cnt:
            valid_dimensions[2][0] *= 2
            valid_dimensions[2][1] *= 2
            valid_dimensions[2][2] *= 4
    differences = [valid_dimensions[0][2] - cnt, valid_dimensions[1][2] - cnt, valid_dimensions[2][2] - cnt]
    mindex = differences.index(min(differences))
    return valid_dimensions[mindex], differences[mindex]

dimensions, generated = best_dimension()
data['combined_image_length'] = dimensions[0]
data['combined_image_width'] = dimensions[1]
data['generated_submissions'] = generated
with open('config.json', 'w') as f:
    json.dump(data, f, indent=4)