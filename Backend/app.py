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

                # Enhanced formatting
                formatted_response = chatbot_response.replace("\n\n", "<br><br>").replace("\n", "<br>")
                return jsonify({"response": formatted_response})
            else:
                return jsonify({"error": "Invalid API response format", "details": api_data}), 500

        return jsonify({"error": "Together API Error", "details": response.text}), response.status_code

    except Exception as e:
        return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import os
# import requests

# app = Flask(__name__)
# CORS(app)

# TOGETHER_API_KEY = os.getenv("TOGETHER_API_KEY")
# TOGETHER_API_URL = "https://api.together.xyz/v1/chat/completions"

# @app.route('/process', methods=['POST'])
# def process_question():
#     try:
#         data = request.get_json()

#         if "question" not in data:
#             return jsonify({"error": "Missing 'question' field"}), 400

#         headers = {
#             "Authorization": f"Bearer {TOGETHER_API_KEY}",
#             "Content-Type": "application/json"
#         }

#         payload = {
#             "model": "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo-128K",
#             "messages": [{"role": "user", "content": data["question"]}]
#         }

#         response = requests.post(TOGETHER_API_URL, json=payload, headers=headers)

#         if response.status_code == 200:
#             api_data = response.json()
#             if "choices" in api_data and api_data["choices"]:
#                 chatbot_response = api_data["choices"][0]["message"]["content"]
#                 return jsonify({"response": chatbot_response})  # Fix the response format
#             else:
#                 return jsonify({"error": "Invalid API response format", "details": api_data}), 500

#         return jsonify({"error": "Together API Error", "details": response.text}), response.status_code

#     except Exception as e:
#         return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)
