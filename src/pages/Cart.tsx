import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  CreditCard,
  Shield,
  Award,
  Clock,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Cart = () => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalPrice,
  } = useCart();

  const totalPrice = getTotalPrice();
  const discountAmount = totalPrice > 500 ? totalPrice * 0.1 : 0; // 10% discount for orders over $500
  const finalPrice = totalPrice - discountAmount;

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is Empty",
        description: "Add some courses to your cart before checking out.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Checkout Initiated",
      description: "Redirecting to payment gateway...",
    });

    // Simulate checkout process
    setTimeout(() => {
      toast({
        title: "Enrollment Successful!",
        description:
          "Welcome to DefestTech! Check your email for course access details.",
      });
      clearCart();
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-muted/30 p-8 rounded-full w-32 h-32 mx-auto mb-8 flex items-center justify-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any courses yet. Explore our services
            to get started!
          </p>
          <Link to="/services">
            <Button size="lg" className="hero-gradient text-white">
              Browse Courses
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
            <p className="text-muted-foreground">
              {cartItems.length} {cartItems.length === 1 ? "course" : "courses"}{" "}
              in your cart
            </p>
          </div>
          <Link to="/services">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <Badge variant="secondary" className="mt-1">
                          {item.category}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-primary">
                          ${item.price}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          per course
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="text-lg font-semibold">
                          ${item.price * item.quantity}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Clear Cart */}
            <div className="flex justify-end">
              <Button
                variant="ghost"
                onClick={clearCart}
                className="text-destructive"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Cart
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (10%)</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <Separator />

                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary">
                      ${finalPrice.toFixed(2)}
                    </span>
                  </div>

                  {totalPrice > 500 && (
                    <Badge className="w-full justify-center bg-green-100 text-green-800">
                      🎉 You saved ${discountAmount.toFixed(2)} with bulk
                      discount!
                    </Badge>
                  )}
                </div>

                <Button
                  className="w-full mt-6"
                  size="lg"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>

                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-green-600" />
                    Secure payment processing
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-blue-600" />
                    Industry-recognized certificates
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-purple-600" />
                    Lifetime access to course materials
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Promo Code */}
            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg">Promo Code</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex space-x-2">
                  <Input placeholder="Enter promo code" />
                  <Button variant="outline">Apply</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Enter a valid promo code to get additional discounts
                </p>
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="p-6 bg-primary text-white">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm opacity-90 mb-4">
                Our support team is available 24/7 to assist you with any
                questions.
              </p>
              <Link to="/contact">
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white text-primary"
                >
                  Contact Support
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
