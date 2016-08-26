import {
    async,
    inject,
    addProviders,
    ComponentFixture
} from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { SpyLocation } from '@angular/common/testing';