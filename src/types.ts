/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageSeed: string;
  imageUrl?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'new' | 'contacted';
  createdAt: string;
}
