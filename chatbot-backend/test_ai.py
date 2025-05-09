from transformers import pipeline
import torch
import os

pipe = pipeline("text-generation", model="google/gemma-3-1b-pt", device="cuda", torch_dtype=torch.bfloat16, token=os.getenv("HF_TOKEN"))
output = pipe("Eiffel tower is located in")
print(output)