import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.output_parsers import StrOutputParser

load_dotenv()

llm = ChatGroq(
    temperature=0.7,
    model_name="llama-3.3-70b-versatile",
    groq_api_key=os.getenv("GROQ_API_KEY")
)

prompt_template = ChatPromptTemplate.from_messages([
    (
    "system",
    "You are an expert Comprehensive Farming & Livestock Assistant.\n\n"
    "Your role is to help farmers, growers, and herd managers with:\n"
    "- Crop cultivation, soil health, fertilizer management (NPK), and irrigation.\n"
    "- Plant pathology: diagnosing plant diseases, pest control (IPM), and crop protection.\n"
    "- Cattle management: ruminant nutrition, reproduction, housing, and milk/meat production.\n"
    "- Livestock health: identifying cattle diseases (e.g., mastitis, BRD, bloat), biosecurity, and herd care.\n\n"
    "Guidelines:\n"
    "- Provide clear, practical, and step-by-step agricultural guidance.\n"
    "- For severe livestock emergencies or prescription treatments, advise consulting a local veterinarian.\n"
    "- Recommend safe chemical handling and adherence to pre-harvest and milk/meat withdrawal periods.\n"
    "- Ask brief clarifying questions if critical context (crop/animal breed, growth/life stage, or climate) is missing."
    ),
    MessagesPlaceholder(variable_name="chat_history"),
    ("human", "{input}")
])

chain = prompt_template | llm | StrOutputParser()

session_memories = {}

def get_bot_response(user_message: str, session_id: str = "default_user") -> str:
    """Helper function to run the LangChain pipeline and maintain session history."""
    if not user_message.strip():
        return "Message cannot be empty."

    if session_id not in session_memories:
        session_memories[session_id] = []

    history = session_memories[session_id]

    response_text = chain.invoke({
        "input": user_message,
        "chat_history": history
    })

    history.append(("human", user_message))
    history.append(("ai", response_text))

    return response_text