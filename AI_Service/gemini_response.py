from dotenv import load_dotenv
load_dotenv()

import google.generativeai as genai
import streamlit as st
import os


genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

model = genai.GenerativeModel("gemini-pro")
def get_gemini_response(question):
    response = model.generate_content(question)
    return response.text

###Testing part
# user_input = input("Ask something: ")
# response = get_gemini_response(question=user_input)
# print(response)
