from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/process'  ,methods = ['post'])
def process_data():
  # Simulate some data retrieval (replace with your actual logic)
  data = request.get_json()
  print(data)
  messages = data.get('messages') 
  return jsonify({'message' : messages})

if __name__ == '__main__':
  app.run(debug=False)



# from flask import Flask, jsonify, request
# from transformers import pipeline
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)  # Enable CORS to allow React frontend to communicate with the Flask backend

# # Initialize the summarization pipeline
# summarizer = pipeline("summarization")

# @app.route('/process', methods=['POST'])
# def process_data():
#     # Simulate some data retrieval (replace with your actual logic)
#     data = request.get_json()
#     print(data)
#     messages = data.get('messages')
#     return jsonify({'message': messages})

# @app.route('/summarize', methods=['POST'])
# def summarize():
#     data = request.get_json()
#     text = data.get('text', '')
#     if not text:
#         return jsonify({"error": "No text provided"}), 400
#     try:
#         # Generate summary using the summarization pipeline
#         summary = summarizer(text, max_length=100, min_length=30, do_sample=False)
#         return jsonify({"summary": summary[0]['summary_text']})
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=False)

 