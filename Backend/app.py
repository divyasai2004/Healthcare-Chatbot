from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import requests

app = Flask(__name__)
CORS(app)

TOGETHER_API_KEY = os.getenv("TOGETHER_API_KEY")
TOGETHER_API_URL = "https://api.together.xyz/v1/chat/completions"

@app.route('/process', methods=['POST'])
def process_question():
    try:
        data = request.get_json()

        if "question" not in data:
            return jsonify({"error": "Missing 'question' field"}), 400

        headers = {
            "Authorization": f"Bearer {TOGETHER_API_KEY}",
            "Content-Type": "application/json"
        }

        payload = {
            "model": "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo-128K",
            "messages": [{"role": "user", "content": data["question"]}]
        }

        response = requests.post(TOGETHER_API_URL, json=payload, headers=headers)

        if response.status_code == 200:
            api_data = response.json()
            if "choices" in api_data and api_data["choices"]:
                chatbot_response = api_data["choices"][0]["message"]["content"]
                return jsonify({"response": chatbot_response})  # ✅ Fix the response format
            else:
                return jsonify({"error": "Invalid API response format", "details": api_data}), 500

        return jsonify({"error": "Together API Error", "details": response.text}), response.status_code

    except Exception as e:
        return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

# from flask import Flask, jsonify, request
# from flask_cors import CORS
# import os
# import requests
# from dotenv import load_dotenv

# load_dotenv()

# app = Flask(__name__)
# CORS(app)

# GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
# GEMINI_API_URL = "https://api.generativeai.google.com/v1beta2/models/gemini-pro:generateText"  # Correct Gemini endpoint

# @app.route('/process', methods=['POST'])
# def chat_proxy():
#     data = request.get_json()

#     if not data or 'question' not in data:
#         return jsonify({'error': 'Missing "question" parameter'}), 400

#     user_question = data['question']

#     try:
#         headers = {
#             'Content-Type': 'application/json',
#             'Authorization': f'Bearer {GEMINI_API_KEY}'
#         }

#         payload = {
#             'prompt': {
#                 'text': user_question
#             }
#         }

#         response = requests.post(GEMINI_API_URL, headers=headers, json=payload)
#         response.raise_for_status()  # Raise HTTPError for bad responses (4xx or 5xx)

#         gemini_data = response.json()

#         if gemini_data.get('candidates') and len(gemini_data['candidates']) > 0:
#             gemini_response = gemini_data['candidates'][0]['output']
#             return jsonify({'response': gemini_response}), 200
#         else:
#             print(f"Unexpected Gemini response: {gemini_data}")  # Log the full response for debugging
#             return jsonify({'error': 'Unexpected Gemini response format'}), 500

#     except requests.exceptions.RequestException as e:  # Catch requests-specific errors
#         print(f"Gemini API Error: {e}")  # Log the error
#         return jsonify({'error': 'Error communicating with Gemini API'}), 500
#     except Exception as e:  # Catch any other error
#         print(f"An error occurred: {e}")
#         return jsonify({'error': 'An internal server error occurred'}), 500

# if __name__ == '__main__':
#     app.run(debug=True, port=5000)










# from flask import Flask, jsonify, request
# from transformers import pipeline
# from flask_cors import CORS
# import openai
# import os
# from dotenv import load_dotenv

# # Load environment variables
# load_dotenv()

# # Initialize Flask app
# app = Flask(__name__)
# CORS(app)  # Enable CORS for frontend communication

# # Load OpenAI API key
# openai.api_key = os.getenv("OPENAI_API_KEY")

# @app.route('/process', methods=['POST'])
# def process_data():
#     data = request.get_json()
#     user_message = data.get('messages', '')

#     if not user_message:
#         return jsonify({'error': 'No message provided'}), 400

#     try:
#         # Sending user input to OpenAI ChatGPT API
#         response = openai.ChatCompletion.create(
#             model="gpt-3.5-turbo",
#             messages=[
#                 {"role": "system", "content": "You are a helpful AI assistant."},
#                 {"role": "user", "content": user_message}
#             ]
#         )

#         chatbot_reply = response['choices'][0]['message']['content']
#         return jsonify({'message': chatbot_reply})

#     except openai.error.AuthenticationError:
#         return jsonify({'error': 'Invalid API key. Please check your .env file.'}), 401
#     except openai.error.OpenAIError as e:
#         return jsonify({'error': f'OpenAI API Error: {str(e)}'}), 500
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)  # Run in debug mode for detailed logs



