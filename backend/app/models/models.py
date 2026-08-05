from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, Text, Float, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.models.base import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    is_superuser = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    businesses = relationship("Business", back_populates="owner")
    subscriptions = relationship("Subscription", back_populates="user")
    notifications = relationship("Notification", back_populates="user")
    settings = relationship("Settings", back_populates="user", uselist=False)

class Business(Base):
    __tablename__ = "businesses"
    id = Column(Integer, primary_key=True, index=True)
    owner_id = Column(Integer, ForeignKey("users.id"))
    name = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    owner = relationship("User", back_populates="businesses")
    locations = relationship("Location", back_populates="business")
    qr_codes = relationship("QRCode", back_populates="business")
    analytics = relationship("Analytics", back_populates="business")

class Location(Base):
    __tablename__ = "locations"
    id = Column(Integer, primary_key=True, index=True)
    business_id = Column(Integer, ForeignKey("businesses.id"))
    name = Column(String, nullable=False)
    address = Column(Text, nullable=True)
    google_place_id = Column(String, nullable=True)
    
    business = relationship("Business", back_populates="locations")
    qr_codes = relationship("QRCode", back_populates="location")

class Plan(Base):
    __tablename__ = "plans"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    features = Column(JSON, nullable=True)
    stripe_price_id = Column(String, nullable=True)
    
    subscriptions = relationship("Subscription", back_populates="plan")

class Coupon(Base):
    __tablename__ = "coupons"
    id = Column(Integer, primary_key=True, index=True)
    code = Column(String, unique=True, index=True)
    discount_percent = Column(Float, nullable=False)
    valid_until = Column(DateTime(timezone=True), nullable=True)

class Subscription(Base):
    __tablename__ = "subscriptions"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    plan_id = Column(Integer, ForeignKey("plans.id"))
    stripe_subscription_id = Column(String, nullable=True)
    status = Column(String, default="active")
    current_period_end = Column(DateTime(timezone=True), nullable=True)
    
    user = relationship("User", back_populates="subscriptions")
    plan = relationship("Plan", back_populates="subscriptions")
    payments = relationship("Payment", back_populates="subscription")

class Payment(Base):
    __tablename__ = "payments"
    id = Column(Integer, primary_key=True, index=True)
    subscription_id = Column(Integer, ForeignKey("subscriptions.id"))
    amount = Column(Float, nullable=False)
    status = Column(String, nullable=False)
    stripe_payment_intent_id = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    subscription = relationship("Subscription", back_populates="payments")

class QRCode(Base):
    __tablename__ = "qr_codes"
    id = Column(Integer, primary_key=True, index=True)
    business_id = Column(Integer, ForeignKey("businesses.id"))
    location_id = Column(Integer, ForeignKey("locations.id"), nullable=True)
    design_config = Column(JSON, nullable=True)
    image_url = Column(String, nullable=True)
    short_url = Column(String, unique=True, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    business = relationship("Business", back_populates="qr_codes")
    location = relationship("Location", back_populates="qr_codes")
    scans = relationship("QRScan", back_populates="qr_code")

class QRScan(Base):
    __tablename__ = "qr_scans"
    id = Column(Integer, primary_key=True, index=True)
    qr_code_id = Column(Integer, ForeignKey("qr_codes.id"))
    scanned_at = Column(DateTime(timezone=True), server_default=func.now())
    ip_address = Column(String, nullable=True)
    user_agent = Column(String, nullable=True)
    
    qr_code = relationship("QRCode", back_populates="scans")
    drafts = relationship("ReviewDraft", back_populates="scan")

class ReviewDraft(Base):
    __tablename__ = "review_drafts"
    id = Column(Integer, primary_key=True, index=True)
    scan_id = Column(Integer, ForeignKey("qr_scans.id"), nullable=True)
    rating = Column(Integer, nullable=True)
    content = Column(Text, nullable=True)
    language = Column(String, nullable=True)
    tone = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    scan = relationship("QRScan", back_populates="drafts")

class Analytics(Base):
    __tablename__ = "analytics"
    id = Column(Integer, primary_key=True, index=True)
    business_id = Column(Integer, ForeignKey("businesses.id"))
    date = Column(DateTime(timezone=True), server_default=func.now())
    total_scans = Column(Integer, default=0)
    total_drafts = Column(Integer, default=0)
    
    business = relationship("Business", back_populates="analytics")

class Notification(Base):
    __tablename__ = "notifications"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String, nullable=False)
    message = Column(Text, nullable=False)
    is_read = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    user = relationship("User", back_populates="notifications")

class Settings(Base):
    __tablename__ = "settings"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True)
    preferences = Column(JSON, nullable=True)
    
    user = relationship("User", back_populates="settings")

class AuditLog(Base):
    __tablename__ = "audit_logs"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    action = Column(String, nullable=False)
    details = Column(JSON, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
