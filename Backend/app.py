from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import requests
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
GEMINI_API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText?key={GEMINI_API_KEY}"

@app.route('/process', methods=['POST'])
def chat_proxy():
    data = request.get_json()

    if not data or 'question' not in data:
        return jsonify({'error': 'Missing "question" parameter'}), 400

    user_question = data['question']

    try:
        headers = {'Content-Type': 'application/json'}
        payload = {
            "contents": [
                {"parts": [{"text": user_question}]}
            ]
        }

        response = requests.post(GEMINI_API_URL, headers=headers, json=payload)
        response.raise_for_status()  # Handle HTTP errors

        gemini_data = response.json()

        # Extract response text properly
        gemini_response = gemini_data.get("candidates", [{}])[0].get("content", {}).get("parts", [{}])[0].get("text", "No response received")

        return jsonify({'response': gemini_response}), 200

    except requests.exceptions.RequestException as e:
        print(f"Gemini API Error: {e}")  
        return jsonify({'error': 'Error communicating with Gemini API'}), 500
    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({'error': 'An internal server error occurred'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)



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



