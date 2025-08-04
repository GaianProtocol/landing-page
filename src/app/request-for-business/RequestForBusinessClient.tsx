"use client";

import type React from "react";

import { ArrowLeft, ChevronRight, Home, CheckCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { Input } from "@/components/Form/Input";
import { Select } from "@/components/Form/Select";
import { useTranslation } from "react-i18next";

type FormData = {
  fullName: string;
  workEmail: string;
  companyName: string;
  role: string;
  website: string;
  country: string;
  industry: string;
  productInterest: string[];
  useCase: string;
  volumeEstimate: string;
  timeline: string;
  referralSource: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function RequestForBusinessClient() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    workEmail: "",
    companyName: "",
    role: "",
    website: "",
    country: "",
    industry: "",
    productInterest: [],
    useCase: "",
    volumeEstimate: "",
    timeline: "",
    referralSource: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target as
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement;

    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      const checked = e.target.checked;
      setFormData((prev) => ({
        ...prev,
        productInterest: checked
          ? [...prev.productInterest, value]
          : prev.productInterest.filter((i) => i !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate a random error for demonstration
          if (Math.random() > 0.9) {
            reject(new Error("Something went wrong. Please try again."));
          } else {
            resolve(null);
          }
        }, 1500);
      });

      console.log("Submitted:", formData);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError((err as Error).message || "An unexpected error occurred.");
      console.error("Submission error:", err);
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#A9EE9B]/30 to-white p-4">
        <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md border border-green-100">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4 animate-bounce-in" />
          <h2 className="text-3xl font-extrabold text-green-800">
             {t("requestBusiness.success.title")}
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            {t("requestBusiness.success.message")}
          </p>
          <a
            href="/"
            className="mt-8 inline-block text-green-700 font-medium underline hover:text-green-900 transition-colors duration-200"
          >
            ← {t("requestBusiness.success.backToHome")}
          </a>
        </div>
      </div>
    );
  }

  const isSubmitting = status === "submitting";

  return (
    <section className="relative bg-gradient-to-br from-[#A9EE9B]/10 to-white min-h-screen overflow-hidden py-10">
      {/* Grid Pattern (fake background) */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

      {/* Main Content */}
      <div className="relative max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <button
              className="flex items-center hover:text-green-600 transition-colors"
              onClick={() => window.history.back()}
            >
              <Home className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">{t("requestBusiness.navigation.home")}</span>
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">
              {t("requestBusiness.navigation.breadcrumb")}
            </span>
          </nav>
          <button
            className="flex items-center px-3 py-2 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-all duration-200"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">{t("requestBusiness.navigation.backToHome")}</span>
          </button>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-green-100 p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-900 mb-3">
             {t("requestBusiness.form.title")}
          </h1>
          <p className="text-gray-600 mb-8">
            {t("requestBusiness.form.subtitle")}
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                label={t("requestBusiness.form.fields.fullName")}
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <Input
                label={t("requestBusiness.form.fields.workEmail")}
                name="workEmail"
                type="email"
                value={formData.workEmail}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <Input
                label={t("requestBusiness.form.fields.companyName")}
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <Select
                label={t("requestBusiness.form.fields.role")}
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                options={t("requestBusiness.form.options.roles", { returnObjects: true }) as string[]}
                disabled={isSubmitting}
              />
              <Input
                label={t("requestBusiness.form.fields.website")}
                name="website"
                value={formData.website}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <Input
                label={t("requestBusiness.form.fields.country")}
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <Select
                label={t("requestBusiness.form.fields.industry")}
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
                options={t("requestBusiness.form.options.industries", { returnObjects: true }) as string[]}
                disabled={isSubmitting}
              />
              <Select
                label={t("requestBusiness.form.fields.volumeEstimate")}
                name="volumeEstimate"
                value={formData.volumeEstimate}
                onChange={handleChange}
                options={t("requestBusiness.form.options.volumes", { returnObjects: true }) as string[]}
                disabled={isSubmitting}
              />
              <Select
                label={t("requestBusiness.form.fields.timeline")}
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                options={t("requestBusiness.form.options.timelines", { returnObjects: true }) as string[]}
                disabled={isSubmitting}
              />
              <Input
                label={t("requestBusiness.form.fields.referralSource")}
                name="referralSource"
                value={formData.referralSource}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("requestBusiness.form.fields.interestedIn")}
              </label>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {(t("requestBusiness.form.options.products", { returnObjects: true }) as string[]).map(
                  (item) => (
                    <label
                      key={item}
                      className="flex items-center space-x-2 text-sm text-gray-800 cursor-pointer hover:text-green-700 transition-colors"
                    >
                      <input
                        type="checkbox"
                        name="productInterest"
                        value={item}
                        checked={formData.productInterest.includes(item)}
                        onChange={handleChange}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded accent-green-600"
                        disabled={isSubmitting}
                      />
                      <span>{item}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("requestBusiness.form.fields.useCase")}
              </label>
              <textarea
                name="useCase"
                value={formData.useCase}
                onChange={handleChange}
                rows={4}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none transition-all duration-200 shadow-sm"
                disabled={isSubmitting}
              />
            </div>

            {error && <div className="text-red-600 text-sm mt-2">{error}</div>}

            <button
              type="submit"
              className={cn(
                "bg-green-700 w-full hover:bg-green-800 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300",
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:scale-[1.01]"
              )}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {t("requestBusiness.form.submitting")}
                </span>
              ) : (
                t("requestBusiness.form.submit")
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
