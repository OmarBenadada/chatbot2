from sqlalchemy import ForeignKey,create_engine
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from typing import List

url="sqlite:///DataBase.db"

myEngine=create_engine(url=url)

class Base(DeclarativeBase):
    pass

class Conversations(Base):

    __tablename__="Convo"

    id:Mapped[int]=mapped_column(primary_key=True)
    title:Mapped[str]=mapped_column()

    message_info:Mapped[List["MessagesDetails"]]=relationship(back_populates="conversation")

class MessagesDetails(Base):
    __tablename__="messages"

    id:Mapped[int]=mapped_column(primary_key=True)
    message:Mapped[str]=mapped_column()
    sender:Mapped[str]=mapped_column()

    conversation_id:Mapped[int]=mapped_column(ForeignKey("Convo.id"))

    conversation:Mapped[Conversations]=relationship(back_populates="message_info")

Base.metadata.create_all(myEngine)
